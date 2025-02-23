
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { connectDb } from './db/connection'

const app = express()
const port = process.env.PORT
app.use(cors())
connectDb()

console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

app.listen(port, () =>{
    console.log(`running on ${port}`);
})