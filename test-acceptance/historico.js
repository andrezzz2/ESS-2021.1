const { defineSupportCode } = require('cucumber');
const { browser, $, element, ElementArrayFinder, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I'm on the page "([^\"]*)"$/, async () => {
        await browser.get("http://localhost:3000");
    })
    When(/^I click in the page historico$/, async () => {
        await element(by.id("historico")).click();
    })

    Then(/^the site goes to the page "([^\"]*)" with the wish list/, async () => {
        await browser.get("http://localhost:3000/historico");
    })

})