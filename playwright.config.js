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
  //timeout: 5000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  testDir: '.',
  testMatch: /.*.spec.js/,
  testIgnore: '**/spec/**',

  use: {
    baseURL: 'http://localhost:3000',//env[process.env.ENV],//
    headless: false,
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