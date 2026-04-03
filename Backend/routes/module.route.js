import express from "express";
import uploadFile from "../controllers/Modules/create.controller.js";
import multer from 'multer'
import deleteUploadedFile from "../controllers/Modules/delete.controller.js";
import getAllUploadedImage from "../controllers/Modules/readImage.controller.js";
import getAllUploadedFile from "../controllers/Modules/readFile.controller.js";


const storage = multer.memoryStorage(); // RAM me store hoga
const upload = multer({ storage });

const router = express.Router()

router.post('/upload' , upload.single("file") , uploadFile)

router.post('/delete'  , deleteUploadedFile)

router.get('/read/image'  , getAllUploadedImage)

router.get('/read/file'  , getAllUploadedFile)

export default router