const express = require('express')
const app = express()
const port = 3000

const cupcakes = require('./data/cupcakes')

app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index', {
    title: 'cupcake counter',
    cupcakes: cupcakes
  })
})

app.listen(3000, () => {
  console.log('Server listening on port:', port)
  console.log(cupcakes);
})
