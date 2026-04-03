import adminModel from "../../models/admin.model.js"


async function createAdmin(req,res){
    try {
        const {username , password} = req?.body

        if(!username || password.length == 0)
            return res.status(400).json({message : "Username and password is required"})

        const createdUser = await adminModel.create({
            username,
            password
        })

        return res.status(200).json({data : createdUser , message : "User is created"})

    } catch (error) {
        res.status(500).json({message : error?.message})
    }
}

export default createAdmin