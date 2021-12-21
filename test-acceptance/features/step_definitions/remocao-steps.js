require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

let driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();

const { Given, When, Then} = require('cucumber');
const {expect} = require('chai');

Given('Eu estou no link de remover e o CPF "01010101010" está cadastrado com a senha "12345678"', {timeout: 60 *1000}, async () => {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000/remover');
})
Given('Eu estou no link de remover e o CPF "1234543210" não está cadastrado', {timeout: 60 *1000}, async () => {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000/remover');
})
Given('Eu estou no link de remover e o CPF "99999999999" está cadastrado com a senha "senha123"', {timeout: 60 *1000}, async () => {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000/remover');
})
When('Eu preencho o campo de CPF com {string} e de senha com {string}', async (string, string2) => {
    await driver.findElement(By.id("cpf")).sendKeys(string);
    await driver.findElement(By.id("password")).sendKeys(string2);
})
When('Eu clico no botão "remover"', async () => {
    const botao = await driver.findElement(By.id("remover"));
    await driver.actions().click(botao).perform();
})
Then('O site de remocao me mostra uma mensagem de {string}', (string) => {
    //driver.findElement(By.id("resp-remover")).getAttribute("innerHTML").then((mensagem)=>{
    driver.findElement(By.id("resp-remover")).getText().then((mensagem)=>{
        expect(mensagem).equal(string);
    }).catch((err) => {
        console.error("Handling promise rejection", err);
    });
})