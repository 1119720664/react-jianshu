t express=require('express')
const app = express()
const router = express.Router()
app.use('/',express.static('./build'))

const port = process.env.PORT || 2000
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
