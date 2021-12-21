require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

let driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();

const { Given, When, Then} = require('cucumber');
const {expect} = require('chai');


Given('Eu estou no link {string}', {timeout: 60 *1000}, async (string) => {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3000'+string);
})
When('Eu clico na aba de "historico de pedidos"', async () => {
    const historico = await driver.findElement(By.id("historico"));
    //const vegetable = driver.findElement(By.className('tomatoes'));
    //driver.findElement(By.name('q')).sendKeys('webdriver', Key.ENTER);
    await driver.actions().click(historico).perform();
})
Then('O site me redireciona para a página "historico de pedidos"', async () => {
    const current = await driver.getCurrentUrl();
    //assert.equal(current, "http://localhost:3000/historico");
    expect(current).equal("http://localhost:3000/historico");
    //current.should.equal("http://localhost:3000/historico");
})
Then('A tabela com o "histórico de pedidos" é mostrada', async () =>{
    const tabela = await driver.findElement(By.className('table table-dark')).getText();
    expect(tabela).contain('Nome do Restaurante');
})