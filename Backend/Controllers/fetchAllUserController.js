import User from "../Models/UserModel.js";

export const fetchAllUserController = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.status(200).json({
      sucess: true,
      data: allUser,
      message: "users fetch sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      message: "unable to fetch user, somthing went wrong",
      data: err.message,
    });
  }
};

export const fetchSingleUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const allUser = await User.findById({ _id: id });
    res.status(200).json({
      sucess: true,
      data: allUser,
      message: "users fetch sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      message: "unable to fetch user, somthing went wrong",
      data: err.message,
    });
  }
};
