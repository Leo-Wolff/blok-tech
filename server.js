const express = require('express')
const Handlebars = require("handlebars")
const app = express()
const port = 3000

app.set('view engine', 'handlebars'); // view engine HBS
app.set('views', 'view');

app
  .use('/static', express.static('static'))
  .get('/', onhome) //index.html
  .get('/letter', onletter) //text-editor.html
  .get('/bottle', onbottle) //bottle-editor.html
  .get('/drafts', ondrafts) //drafts.html
  .get('/ocean', onocean) //bottle-throw-ocean.html
  .get('/campfire', oncampfire) //bottle-throw-campfire.html

function onhome(req,res) {
  res.render('index.hbs')
  res.status(200)
}

function onletter(req,res) {
  res.render('text-editor.hbs')
  res.status(200)
}

function onbottle(req,res) {
  res.render('bottle-editor.hbs')
  res.status(200)
}

function ondrafts(req,res) {
  res.render('drafts.hbs')
  res.status(200)
}

function onocean(req,res) {
  res.render('bottle-throw-ocean.hbs')
  res.status(200)
}

function oncampfire(req,res) {
  res.render('bottle-throw-campfire.hbs')
  res.status(200)
}

app.get('*', (req, res) => {
  res.send('Error 404 Not found..')
})

app.listen(port, () => {
  console.log(`Wow look at that port ${port}`)
})
