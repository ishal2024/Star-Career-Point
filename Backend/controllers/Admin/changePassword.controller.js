import adminModel from "../../models/admin.model.js";

async function changePassword(req, res) {
  try {
    const {  newPassword } = req.body;

    if (newPassword.length == 0) {
      return res.status(400).json({
        message: "Please enter new password"
      });
    }

    const user = await adminModel.findOneAndUpdate(
        {username : "admin"},
        {$set : {password : newPassword}},
        {new : true}
    );

    return res.status(200).json({
      data : user,
      message: "Password changed successfully"
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default changePassword