import express from 'express'
import enquireNowByMail from '../controllers/enquireNow.controller.js'

const router = express.Router()

router.post('' , enquireNowByMail)


export default router