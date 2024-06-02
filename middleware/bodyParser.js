const express = require('express');
const bodyParser = require('body-parser');

//le middleware body-parser pour analyser les données du corps de la requête
module.exports = express.json();
module.exports = bodyParser.urlencoded({ extended: true });