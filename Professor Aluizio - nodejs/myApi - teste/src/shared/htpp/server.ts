import express from 'express'
import 'express-async-errors'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json(body: { message: 'Olá Dev!'})
})


app.listen(3000, () => {
  console.log(message: 'Server started on port 3000!')
})
