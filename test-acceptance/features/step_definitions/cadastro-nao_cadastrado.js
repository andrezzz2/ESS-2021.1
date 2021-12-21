require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
let driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();

const { Given, When, Then} = require('cucumber');
const {expect} = require('chai');


Given('Eu estou no link do cadastro', {timeout: 60 *1000}, async () => {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000/cadastro');
})

When('Eu preencho o campo de nome com {string}, sobrenome com {string}, CPF com {string}, data de nascimento com {string}, email com {string}, o telefone com {string} e senha com {string}',
    async (string, string2, string3, string4, string5, string6, string7) => {
    await driver.findElement(By.id("name")).sendKeys(string);
    await driver.findElement(By.id("lastname")).sendKeys(string2);
    await driver.findElement(By.id("cpf")).sendKeys(string3);
    await driver.findElement(By.id("birth_date")).sendKeys(string4);
    await driver.findElement(By.id("email")).sendKeys(string5);
    await driver.findElement(By.id("telefone")).sendKeys(string6);
    await driver.findElement(By.id("password")).sendKeys(string7);
})
When('Eu clico no botão "cadastrar"', async () => {
    const botao = await driver.findElement(By.id("cadastrar"));
    await driver.actions().click(botao).perform();
})
Then('O site de cadastro me mostra uma mensagem de {string}', async (string) => {
    const mensagem = await driver.findElement(By.id("resp-cadastrar")).getText();
    expect(mensagem).equal(string);
})