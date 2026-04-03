import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {connectDatabase} from './config/db.config.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()

connectDatabase()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

app.use(
  cors({
    origin: ["http://localhost:5173" , "https://star-career-point.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

import mailRouter from './routes/enquire.route.js'
import moduleRouter from './routes/module.route.js'
import adminRouter from './routes/admin.route.js'

app.use('/api/mail/' , mailRouter)
app.use('/api/module' , moduleRouter)
app.use('/api/admin' , adminRouter)

app.get('/' , (req,res) => {
   res.send("Hello World")
})

app.listen(3000 , () => {
    console.log("Server is listening")
})