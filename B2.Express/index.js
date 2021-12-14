const express = require('express')
const app = express()
var router = express.Router()

router.use(function (req, res, next) {
    console.log('Time: ', new Date());
    next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Books home page')
})

// define the about route
router.get('/:booktype', function (req, res) {
    const bookName = req.params.booktype
  res.send(`About ${bookName} book`)
})

app.use('/books', router)

app.get('/', (req, res) => {
    res.send('Home page')
})

const server = app.listen(8000, () => {
    console.log('server at port 8000');
})
