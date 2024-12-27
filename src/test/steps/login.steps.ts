import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { setDefaultTimeout } from '@cucumber/cucumber';

let browser : Browser;
let page: Page;


         Given('el usuario está en la página de inicio de sesion', async function () {
          browser = await chromium.launch({headless:false})
          page = await browser.newPage();
          await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         });
       

         When('el usuario introduce {string} como nombre de usuario', async function (usuario) {
          console.log('Paso: Esperando que el campo de usuario esté visible...' + usuario); 
          await page.waitForSelector('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', {timeout:10000});
           await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type(usuario);

         });

         When('el usuario introduce {string} como contraseña', async function (contraseña) {
          
          await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type(contraseña);
         });

        When('el usuario hace clic en el botón de iniciar sesion', async function () {
          await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
         });

         Then('el usuario debería ver la página principal', async function () {
          const text = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').textContent();
          console.log(text);
         });
