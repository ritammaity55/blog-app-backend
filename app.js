import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());//middleware

app.use('/api/user', router);
app.use('/api/blog', blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:admin1234@cluster0.mfbh7.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("connected to db and listening to localhost 5000"))
  .catch((err) => console.log(err));

// username : "admin"
// password : "admin1234"
// npm start
