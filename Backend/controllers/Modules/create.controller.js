import cloudinary from "../../config/cloudinary.config.js"
import { moduleModel } from "../../models/modules.model.js"
import { uploadFromBuffer } from "../../Service/UploadFromBuffer.js"



async function uploadFile(req, res) {
    let result;
    try {

        if (!req.file) {
            return res.status(400).json({ message: "File is required" });
        }

        result = await uploadFromBuffer(req.file.buffer)

        console.log(result)

        if (!result || !result.public_id) {
            return res.status(400).json({ message: "Upload failed" });
        }

        const createdFile = await moduleModel.create({
            public_id: result.public_id,
            url: result.secure_url,
            resource_type: result.resource_type,
            title: req?.body?.title || "Untitled",
            course: "Bsc Prog Computer Science",
            file_size : result.bytes
        })

        res.status(200).json({
            file: createdFile,
            file_details : result,
            message: "File is uploaded successfully"
        })
    } catch (error) {

        if (result?.public_id) {
            await cloudinary.uploader.destroy(result.public_id, {
                resource_type: result.resource_type || "auto"
            });
        }

        res.status(500).json({ message: error?.message })
    }
}

export default uploadFile