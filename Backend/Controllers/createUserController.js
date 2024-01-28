import User from "../Models/UserModel.js";

export const createUserController = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const userData = await User.create({ name: name, email: email, age: age });
    res.status(200).json({
      sucess: true,
      data: userData,
      massage: "user created sucessfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      sucess: false,
      data: err.massage,
      massage: "user is not created/may be user already exist",
    });
  }
};
