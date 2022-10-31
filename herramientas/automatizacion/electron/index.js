const { app, BrowserWindow } = require('electron');
const { read } = require('original-fs');

let ventanaPrincipla;

app.on('ready', crearVentana) //escuchar cuando esta listo para poder crear la ventana

function crearVentana() {
  ventanaPrincipla = new BrowserWindow({
    width: 800,
    height: 600,
  });
  ventanaPrincipla.loadFile('index.html');
};