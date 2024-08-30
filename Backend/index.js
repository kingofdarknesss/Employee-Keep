import express from "express";
import DbConnection from "./Config/DbConnection.js";
import dotenv from "dotenv";
import router from "./Routes/crudRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();

DbConnection();

app.use(
  cors({
    origin:http://18.191.117.210:5173,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req, res) => {
  res.send("this is a / route");
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is started at ${process.env.PORT}`);
});
