import User from "../Models/UserModel.js";

export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const allUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        age: age,
      },
      { new: true }
    );
    res.status(200).json({
      sucess: true,
      data: allUser,
      message: "users updated sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      message: "unable to update user, somthing went wrong",
      data: err.message,
    });
  }
};
