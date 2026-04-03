import { moduleModel } from "../../models/modules.model.js"


async function getAllUploadedFile(req,res){
    try {
        const results = await moduleModel.find({resource_type : "raw" }).sort({ createdAt: -1 })

        res.status(200).json({data : results , message : "All uploaded documents"})

    } catch (error) {
        res.status(500).json({message : error?.message})
    }
}

export default getAllUploadedFile