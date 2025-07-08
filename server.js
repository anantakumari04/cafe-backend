import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv'
const app = express();
app.use(express.json());

dotenv.config()

const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)

// mongoose.connect("mongodb://localhost:27017/merncafe").then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.jwy61tr.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

app.use("/api/users", userRouter);