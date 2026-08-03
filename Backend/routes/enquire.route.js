import express from 'express'
import enquireNowByMail from '../controllers/enquireNow.controller.js'
import { sendMail } from '../controllers/Gurgaon Real Estate/sendMail.controller.js'

const router = express.Router()

router.post('' , enquireNowByMail)

router.post('/realestate' , sendMail)

export default router