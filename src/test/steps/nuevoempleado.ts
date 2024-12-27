import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import { setDefaultTimeout } from '@cucumber/cucumber';


let browser : Browser;
let page: Page;



setDefaultTimeout(100000);

  Given('el administrador está autenticado en el sistema OrangeHRM', async function () {    


            browser = await chromium.launch({headless:false, args: ['--start-maximized']})
             page = await browser.newPage();
             await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
             await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin');
             await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123');
             await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
             
  });


  When('el administrador navega a la sección PIM', async function () {

    await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
    await page.waitForSelector('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]', { state: 'visible' });
  });


  When('el administrador hace clic en el botón Add', async function () {
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').click();
  });


  When('el administrador completa los datos del empleado con:', async function (dataTable) {
    const data = dataTable.hashes();
    const empleados = dataTable.hashes(); // Convierte la tabla en un array de objetos
    const empleado = empleados[0]; // Accede al primer empleado si solo se define uno
    
    await page.fill('input[name="firstName"]', empleado.primernombre);
    await page.fill('input[name="middleName"]', empleado.segundonombre);
    await page.fill('input[name="lastName"]', empleado.apellidos);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input', empleado.id_empleado);

    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[2]/div/label/span');

    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[1]/div/div[2]/input', empleado.username);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[1]/div/div[2]/input', empleado.password);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[4]/div/div[2]/div/div[2]/input', empleado.confirmar_password);

    console.log(`Datos del empleado ${empleado.primernombre} ${empleado.apellidos} completados.`);
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[2]/div/label/span').click();
});


  When('el administrador guarda el empleado', async function () {

    await page.locator("//button[contains(.,'Save')]").click();

  });


  Then('completa la demás informacion con:', async function (dataTable) {
    const data = dataTable.hashes();
    const empleados = dataTable.hashes(); // Convierte la tabla en un array de objetos
    const empleado = empleados[0]; // Accede al primer empleado si solo se define uno
    
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[2]/div/div[2]/input', empleado.OtherId);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input', empleado.Drivers_License);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div[1]/input', empleado.LicenseExpiry);
    await page.fill('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input', empleado.Birth);



    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div/div/div[2]/i');

    // Seleccionar una opción específica (por texto visible)
    await page.locator('.oxd-select-option', { hasText: 'Peruvian' }).click();

    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[2]/div/div[2]/div/div[1]');

    // Seleccionar una opción específica (por texto visible)
    await page.locator('.oxd-select-option', { hasText: 'Single' }).click();



    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[2]/div/div[2]/div[1]/div[2]/div/label')


    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button');

    });

  Then('valida el nuevo empleado con ID {string}', async function (idempleado) {
    await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
    await page.waitForSelector('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]', { state: 'visible' });


    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input').type(idempleado);
    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');


    //validar que la tabla contenga registros después de la búsqueda
    const filas = await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div').count();

    if (filas > 0) {
        console.log(`La tabla tiene ${filas} registros de empleados.`);
    } else {
        console.log('La tabla no tiene registros de empleados.');
    }
  });