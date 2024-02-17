import mongoose from "mongoose";

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    id: { type: Number, unique: true },
    title: { type: String, required: true, unique: true },
    imageURL: String,
    label: String,
    progress: Number,
    numUsers: Number,
    rating: Number,
    userName: String,
  })
);
export default Course;
