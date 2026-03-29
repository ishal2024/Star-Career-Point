import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded())

app.use(
  cors({
    origin: ["http://localhost:5173" , "https://star-career-point.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

import mailRouter from './routes/enquire.route.js'

app.use('/api/mail/' , mailRouter)

app.get('/' , (req,res) => {
   res.send("Hello World")
})

app.listen(3000 , () => {
    console.log("Server is listening")
})