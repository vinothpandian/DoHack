$("#presButton").on("click", function(){
  if(!localStorage.getItem("PrescriptionID") || localStorage.getItem("PrescriptionID") == "" ) {
    console.log("Nothing available");
  }
  else  {
    window.location.href = "prescription.html"
  }
})

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/app.css'

import patient from "../images/patient.png"

$('body').css('background-image',  'url(' + patient + ')');

const QRious = require('qrious');

const canvas = document.querySelector('canvas');

const qr = new QRious({
  element: canvas,
  value: localStorage.getItem('address')
});

qr.backgroundAlpha = 0.8;
qr.foregroundAlpha = 0.8;
qr.level = 'H';
qr.padding = 25;
qr.size = 300;

qr === canvas.qrious;
