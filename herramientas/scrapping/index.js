const puppeteer = require('puppeteer');

(async () => {//funcion autoejecutda que es igual a no hacer nada solo que al codigo lo guarda en una funcion asyncrona
  console.log('Lanzamos navegador');
  /*   const browser = await puppeteer.launch();//lanzamos en navegador
   */
  const browser = await puppeteer.launch({ headless: false });//le indica que se lanse el navegador y que se vea

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');//vamos a la web de wikipedia al abrir el navegador

  var titul1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);

    return h1.innerHTML;
  });//ejecuta un script dentro de la pagina y nos va  a devolver lo que toque
  console.log(titul1);

  console.log('Cerramos navegador');
  browser.close();//cierra el navegor

  console.log('Navegador cerrado');

})();