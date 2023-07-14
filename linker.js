const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


function includeHTML(file, elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(elementId).innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }
  
  includeHTML('../header.html', 'header');
  includeHTML('../footer.html', 'footer');