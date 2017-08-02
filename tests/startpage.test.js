'use strict';
const webdriver = require('selenium-webdriver');

let browser;

(function extendPath() {
    let pathOfDrivers = process.cwd() + '/node_modules/.bin';
    process.env['PATH'] = process.env['PATH'] + ':' + pathOfDrivers;
})(); // should be part of a global application or application config

beforeEach(() => {
    browser = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
});

afterAll(() => {
    browser.close();
});

test('check start page', () => {
    browser.navigate().to('https://www.home24.de');

    expect(1).toBe(1);
});