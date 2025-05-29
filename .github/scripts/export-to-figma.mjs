#!/usr/bin/env node
import { execSync } from 'node:child_process';
import puppeteer from 'puppeteer';
import { htmlToFigma } from 'html-to-figma';
import { Client } from 'figma-js';
import httpServer from 'http-server';

const { FIGMA_TOKEN, FIGMA_FILE_KEY } = process.env;
if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) throw new Error('FIGMA env vars missing');

// 1. Локальный сервер со статикой
const server = httpServer.createServer({ root: './out' });
await new Promise(r => server.listen(8080, r));

// 2. Снимаем HTML главной страницы в 3 брейк-пойнтах
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet',  width: 834,  height: 1112 },
  { name: 'mobile',  width: 390,  height: 844 }
];
const ROUTE = '/';                         // только «главная»

const pages = [];
const browser = await puppeteer.launch();
for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewport(vp);
  await page.goto(`http://localhost:8080${ROUTE}`, { waitUntil: 'networkidle0' });
  pages.push({ html: await page.content(), name: `${vp.name}_home` });
}
await browser.close();
server.close();

// 3. Конвертируем и сабмитим в Figma
const figma = Client({ personalAccessToken: FIGMA_TOKEN });
for (const p of pages) {
  await htmlToFigma({
    figmaToken: FIGMA_TOKEN,
    fileKey:   FIGMA_FILE_KEY,
    pageName:  p.name,
    html:      p.html,
    detectComponents: true,
    useAutoLayout:    true
  });
}
console.log('✅ Uploaded to Figma');
