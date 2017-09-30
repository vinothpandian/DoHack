import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/app.css'

import background from "../images/Background.png"

const Instascan = require('instascan');

let scanner = new Instascan.Scanner({
  video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    console.log(content);
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
