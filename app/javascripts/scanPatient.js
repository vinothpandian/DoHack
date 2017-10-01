import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/app.css'

import doctor from "../images/doctor.png"

$('body').css('background-image',  'url(' + doctor + ')');

const Instascan = require('instascan');

let scanner = new Instascan.Scanner({
  video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    console.log(content);
    localStorage.setItem('PatientAddress', content);
    window.location.href = "doctorsMenu.html"
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });
