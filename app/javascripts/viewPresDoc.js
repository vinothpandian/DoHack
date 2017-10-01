import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/app.css'

import doctor from "../images/doctor.png"

$('body').css('background-image',  'url(' + doctor + ')');


const QRious = require('qrious');

const canvas = document.querySelector('canvas');

const qr = new QRious({
  element: canvas,
  value: localStorage.getItem('PrescriptionID')
});

qr.backgroundAlpha = 0.8;
qr.foregroundAlpha = 0.8;
qr.level = 'H';
qr.padding = 25;
qr.size = 300;

qr === canvas.qrious;
