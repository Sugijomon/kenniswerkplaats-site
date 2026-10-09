// Geen dependencies. WCAG 2.x relatieve luminantie; browserobservaties via cua_repl.
// node scripts/check-contrast.mjs [pad/naar/browserobservaties.json]
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export const contrast = (a, b) => {
  const luminance = (rgb) => rgb.map(v => {
    const c = v / 255;
    return c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4;
  }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + .05) / (Math.min(x, y) + .05);
};

// Alleen lezen: zichtbare tekst/iconen en hun berekende kleuren in de eigen site.
export function collectContrast() {
  const rgb = value => (value.match(/[\d.]+/g) || []).map(Number);
  const blend = (fg, bg) => fg.slice(0, 3).map((v, i) => v * (fg[3] ?? 1) + bg[i] * (1 - (fg[3] ?? 1)));
  const background = el => {
    const parent = el.parentElement ? background(el.parentElement) : [255, 255, 255];
    return blend(rgb(getComputedStyle(el).backgroundColor), parent);
  };
  const visible = el => {
    const style = getComputedStyle(el), box = el.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && box.width > 2 && box.height > 2 && style.clip !== 'rect(0px, 0px, 0px, 0px)' && (!el.closest('[aria-hidden="true"]:not(svg)') || el.matches('.phase-mark, .pip'));
  };
  const checks = [], complex = [];
  for (const el of document.querySelectorAll('body *')) {
    if (!visible(el) || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) continue;
    const ownText = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    const isIcon = el.tagName.toLowerCase() === 'svg' && el.getAttribute('stroke') === 'currentColor';
    const isPip = el.matches('.phase-mark, .pip');
    if (!ownText && !isIcon && !isPip) continue;
    const style = getComputedStyle(el), size = Number(style.fontSize.replace('px','')), weight = Number(style.fontWeight);
    const large = size >= 24 || (size >= 18.6667 && weight >= 700);
    const bg = background(isPip ? el.parentElement : el);
    let fg = blend(rgb(style.color), bg);
    if (isPip) fg = blend(rgb(style.borderTopColor), bg);
    checks.push({ type: isIcon || isPip ? 'icon' : 'text', foreground: fg, background: bg,
      minimum: isIcon || isPip || large ? 3 : 4.5,
      sample: (ownText || el.getAttribute('class') || 'svg').slice(0, 100) });
    for (let node = el; node; node = node.parentElement) {
      const ancestorStyle = getComputedStyle(node);
      if (ancestorStyle.backgroundImage !== 'none') {
        // Halfgevulde bewijsstip: contrast wordt op de buitenrand getoetst.
        if (!isPip) complex.push({ sample: ownText.slice(0, 80), image: ancestorStyle.backgroundImage, foreground: [...fg], minimum: isIcon || large ? 3 : 4.5, backgrounds: (ancestorStyle.backgroundImage.match(/rgba?\([^)]+\)/g) || []).map(value => blend(rgb(value), bg)) });
        break;
      }
      if ((rgb(ancestorStyle.backgroundColor)[3] ?? 1) === 1) break;
    }
  }
  return { url: location.pathname, width: innerWidth, overflow: document.documentElement.scrollWidth > innerWidth, checks, complex };
}

function run() {
  const css = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
  const declarations = Object.fromEntries([...css.slice(0, css.indexOf('}', css.indexOf(':root'))).matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(m => [m[1], m[2].trim()]));
  const color = token => {
    const value = declarations[token];
    if (!value) throw new Error(`Onbekend token ${token}`);
    if (value.startsWith('var(')) return color(value.slice(4, -1));
    if (!/^#[\da-f]{6}$/i.test(value)) throw new Error(`Geen RGB-kleur: ${token}`);
    return value.slice(1).match(/../g).map(v => parseInt(v, 16));
  };
  const rows = [], failures = [];
  const check = (label, foreground, background, minimum, type = minimum === 3 ? 'icon' : 'text') => {
    const ratio = contrast(foreground, background);
    rows.push({ label, ratio: +ratio.toFixed(3), minimum, type });
    if (ratio < minimum) failures.push(rows.at(-1));
  };
  const backgrounds = ['--card', '--paper', '--surface', '--action-tint', '--org-tint', '--tech-tint', '--leren-tint'];
  for (const fg of ['--ink', '--ink-2', '--ink-3', '--action', '--action-hover', '--org-ink', '--tech-ink', '--leren-ink']) {
    for (const bg of backgrounds) check(`${fg} / ${bg}`, color(fg), color(bg), 4.5);
  }
  for (const domain of ['org', 'tech', 'leren']) {
    const icon = domain === 'leren' ? '--leren-ink' : `--${domain}`;
    check(`icoon ${domain} / ${domain}-tint`, color(icon), color(`--${domain}-tint`), 3);
  }
  for (const bg of ['--action', '--action-hover']) check(`wit / ${bg}`, [255, 255, 255], color(bg), 4.5);
  check('fasestip / wit', color('--phase'), [255, 255, 255], 3);
  // Zwart is de donkerste mogelijke grijstint in de decoratieve beelden.
  for (const [bg, opacity] of [['--paper', .16], ['--paper', .14], ['--surface', .09]]) {
    check(`tekst over kunst (${opacity})`, color('--ink-2'), color(bg).map(v => v * (1 - opacity)), 4.5);
  }
  const tokenPairs = rows.length;
  const observations = process.argv[2] ? JSON.parse(readFileSync(process.argv[2], 'utf8')) : [];
  for (const page of observations) {
    if (page.overflow) failures.push({ label: `Horizontale scroll: ${page.url} (${page.width}px)` });
    for (const item of page.checks) check(`${page.url} (${page.width}px) ${item.type}: ${item.sample}`, item.foreground, item.background, item.minimum, item.type);
    for (const item of page.complex) {
      for (const bg of item.backgrounds ?? []) check(`${page.url} gradient: ${item.sample}`, item.foreground, bg, item.minimum, 'text');
      if (!item.backgrounds?.length) failures.push({ label: `Niet getoetste beeldachtergrond: ${page.url}` });
    }
  }
  console.log(JSON.stringify({
    tokenPairs, pages: observations.length, checks: rows.length,
    observedElements: observations.reduce((n, p) => n + p.checks.reduce((sum, c) => sum + (c.count ?? 1), 0), 0),
    minimumTextRatio: Math.min(...rows.filter(r => r.minimum === 4.5).map(r => r.ratio)),
    minimumIconRatio: Math.min(...rows.filter(r => r.type === 'icon').map(r => r.ratio)),
    minimumLargeTextRatio: Math.min(...rows.filter(r => r.type === 'text' && r.minimum === 3).map(r => r.ratio)),
    domainIcons: rows.filter(r => r.label.startsWith('icoon')),
    baseGreenOnWhite: +contrast(color('--leren'), [255, 255, 255]).toFixed(3),
    complexBackgrounds: observations.flatMap(p => p.complex.map(c => ({ url: p.url, ...c }))),
    failures,
  }, null, 2));
  if (failures.length) process.exitCode = 1;
}

if (typeof process !== 'undefined' && process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) run();

