// setup server
import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser'
import noteRoute from './route/noteRoute.js'
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1', noteRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})