const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('sendusnoods:main');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', function homeRoute(req, res) {
    res.send('Yo');
});

app.listen(port, function listenFunc() {
    debug(`${chalk.blue.bold('SendUsNoods')} running on port ${chalk.red.bold(port)}`);
});
