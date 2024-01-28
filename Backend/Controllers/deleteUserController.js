import User from "../Models/UserModel.js";

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const allUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      sucess: true,
      data: allUser,
      message: "users deleted sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      message: "unable to delete user, somthing went wrong",
      data: err.message,
    });
  }
};
