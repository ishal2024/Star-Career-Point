import { moduleModel } from "../../models/modules.model.js";


async function getAllUploadedImage(req,res){
    try {
        const results = await moduleModel.find({
            $or : [
                {resource_type : "image"},
                {resource_type : "video"},
            ]
        }).sort({ createdAt: -1 })

        res.status(200).json({data : results , message : "All uploaded photos and videos"})

    } catch (error) {
        res.status(500).json({message : error?.message})
    }
}

export default getAllUploadedImage