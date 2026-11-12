// Renderiza HTML -> PDF con Chromium (Playwright). Uso: node render.js '<json jobs>'
const { chromium } = require('playwright');

const SIZES = {
  A4: { width: '210mm', height: '297mm' },
  tapa: { width: '426mm', height: '303mm' },   // A3 apaisado + 3 mm de sangrado por lado
  tarjeta: { width: '91mm', height: '61mm' },  // 85x55 + 3 mm de sangrado por lado
  deck: { width: '1920px', height: '1080px' },
};

(async () => {
  const jobs = JSON.parse(process.argv[2]);
  const browser = await chromium.launch();
  for (const j of jobs) {
    const page = await browser.newPage();
    await page.goto('file://' + j.html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);
    const s = SIZES[j.fmt];
    await page.pdf({ path: j.pdf, width: s.width, height: s.height, printBackground: true, preferCSSPageSize: false, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
    console.log('PDF', j.pdf.split('/').pop());
    await page.close();
  }
  await browser.close();
})();
