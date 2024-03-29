require('dotenv').config()
import * as envURLs from './environments.json'
import { PlaywrightTestConfig, devices } from '@playwright/test';
// @ts-check

/* @type {import('@playwright/test').PlaywrightTestConfig} */
/*Environment URLs */
const env = {
  dev: envURLs.dev,
  prod: envURLs.prod
};

const config = {

  // Each test is given 30 seconds
  //timeout: 60000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,
  //will help our tests work one by one.
  fullyParallel: true,
  //https://dev.to/kantarci/nextjs-playwright-github-actions-boilerplate-497d
  reporter: [ ['junit', { outputFile: 'results.xml' }] ],

  testDir: '.',
  testMatch: /.*.spec.js/,
  testIgnore: '**/spec/**',

  use: {
    baseURL: process.env.URL || 'http://localhost:3000',//env[process.env.ENV],//
    headless: true,
    screenshot: 'on',
    trace: 'on',
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

//console.log(env[process.env.ENV], 'from playwright')

module.exports = config;