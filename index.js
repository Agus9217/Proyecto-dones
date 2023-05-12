import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { dbConnect } from './src/config/mongo.js'
import { createRole } from './src/libs/init.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

dbConnect()
createRole()

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`)
})

