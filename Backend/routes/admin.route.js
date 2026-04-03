import express from 'express'
import createAdmin from '../controllers/Admin/create.controller.js'
import changePassword from '../controllers/Admin/changePassword.controller.js'
import loginAdmin from '../controllers/Admin/login.controller.js'
import logoutAdmin from '../controllers/Admin/logout.controller.js'
import checkUserIsLogin from '../controllers/Admin/isAdminLogin.controller.js'

const router = express.Router()

router.post('/create' , createAdmin)

router.post('/change/password' , changePassword)

router.post('/login' , loginAdmin)

router.get('/logout' , logoutAdmin)

router.get('/auth' , checkUserIsLogin)

export default router