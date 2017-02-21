const express = require('express')
const chalk = require('chalk')
const path = require('path')
const handlebars = require('express-handlebars')

const debug = require('debug')('sendusnoods:main')

const port = process.env.PORT || 3000

const app = express()

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.resolve(__dirname, 'handlebars', 'layouts'),
    partialsDir: path.resolve(__dirname, 'handlebars', 'partials'),
}))
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, 'handlebars', 'views'))

app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.get('/', function homeRoute(req, res) {
    res.render('home')
})

app.listen(port, function listenFunc() {
    debug(`${chalk.blue.bold('SendUsNoods')} running on port ${chalk.red.bold(port)}`)
})
