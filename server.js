const express = require('express')
const Handlebars = require("handlebars")
const app = express()
const port = 3000

app.set('view engine', 'handlebars');
app.set('views', 'view');

app.use('/static', express.static('static'))

//ROUTES

//home.hbs
app.get('/', (req, res) => {
  res.render('home.hbs')
  res.status(200)
})

//bottle.hbs
app.get('/bottle', (req, res) => {
  res.render('bottle.hbs')
  res.status(200)
})

//campfire.hbs
app.get('/campfire', (req, res) => {
  res.render('campfire.hbs')
  res.status(200)
})

//drafts.hbs
app.get('/drafts', (req, res) => {
  res.render('drafts.hbs')
  res.status(200)
})

//letter.hbs
app.get('/letter', (req, res) => {
  res.render('letter.hbs')
  res.status(200)
})

//ocean.hbs
app.get('/ocean', (req, res) => {
  res.render('ocean.hbs')
  res.status(200)
})

//404 Error
app.get('*', (req, res) => {
  res.send('Error 404 Not found..')
})

//Check if server is live
app.listen(port, () => {
  console.log(`Wow look at that port ${port}`)
})
