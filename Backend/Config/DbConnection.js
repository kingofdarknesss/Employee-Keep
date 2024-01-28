import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DbConnection = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("db connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default DbConnection;
