import jwt from "jsonwebtoken"


async function checkUserIsLogin(req,res){
    try {
        const token = req?.cookies?.token
        if(!token){
            return res.status(200).json({status : false , message : "Admin is not auntenticated"})
        }

         return res.status(200).json({status : true , message : "Admin is auntenticated"})

    } catch (error) {
         return res.status(500).json({message : error.message})
    }
}

export default checkUserIsLogin