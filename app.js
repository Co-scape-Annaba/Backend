import express from "express";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000; // set port number

connectDb();

import userRouter from "./routes/user.routes.js";
app.use("/users", userRouter);

import ideasRouter from "./routes/idea.routes.js";
app.use("/ideas", ideasRouter);

import coursesRouter from "./routes/course.routes.js";
app.use("/courses", coursesRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Marhaba..." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // start the server
