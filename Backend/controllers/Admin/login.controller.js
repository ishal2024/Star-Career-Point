import jwt from "jsonwebtoken";
import adminModel from "../../models/admin.model.js";

async function loginAdmin(req, res) {
  try {
    const { username, password } = req.body;

    if (username != "admin") {
      return res.status(400).json({ message: "Incorrect username" });
    }

    const user = await adminModel.findOne({ username : "admin" });
    if (!user) {
      return res.status(400).json({ message: "User not exist" });
    }


    if (user?.password !== password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { username: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // true in production (HTTPS)
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json({
      message: "Login successful",
      user: user,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default loginAdmin