import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    Nom: { type: String, required: true },
    Prenom: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    Speciality: {
      type: String,
    },
    PhoneNumber: {
      type: Number,
    },
    completedCourses: {
      type: Number,
      default: 0,
    },
    registeredCourses: { type: Number, default: 0 },
    leaderShipRating: { type: Number, default: 0, min: 0, max: 5 },
    planingRating: { type: Number, default: 0, min: 0, max: 5 },
    managementRating: { type: Number, default: 0, min: 0, max: 5 },
    financeRating: { type: Number, default: 0, min: 0, max: 5 },
  })
);
export default User;
