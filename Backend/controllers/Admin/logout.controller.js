async function logoutAdmin(req, res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,      // production me true
      sameSite: "Strict"
    });

    return res.status(200).json({
      message: "Logout successful"
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export default logoutAdmin