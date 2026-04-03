import cloudinary from "../../config/cloudinary.config.js"
import { moduleModel } from "../../models/modules.model.js";


async function deleteUploadedFile(req, res) {
    try {
        const { public_id , resource_type } = req?.body

        if (!public_id || !resource_type)
            return res.status(400).json({ message: "File not uploaded" })

        const result = await cloudinary.uploader.destroy(public_id, { resource_type: resource_type })

        if (result.result !== "ok") {
            return res.status(404).json({ message: "File not found on Cloudinary" });
        }

        const deletedDocument = await moduleModel.findOneAndDelete({public_id : public_id})

        res.status(200).json({ data: deletedDocument, message: "File is deleted successfully" })

    } catch (error) {
        return res.status(500).json({ message: error?.message })
    }
}

export default deleteUploadedFile