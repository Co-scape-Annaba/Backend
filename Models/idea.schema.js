import mongoose from "mongoose";

const Idea = mongoose.model(
  "idea",
  new mongoose.Schema({
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Title: { type: String, required: true },
    Domaine: {
      type: String,
    },
    Keywords: {
      type: String,
    },
    TeamSize: {
      type: Number,
    },
    TeamExpertise: {
      type: String,
    },
    Budget: {
      type: Number,
    },
    RevenueMensuel: {
      type: Number,
    },
    CoutMensuel: {
      type: Number,
    },
    NbrClientMensuel: {
      type: Number,
    },
    PointForts: {
      type: String,
    },
    PointsFaibles: {
      type: String,
    },
    Score : {
      type: Number,
    },
    Weaknesses: {
      type: Array,
    },
    Strenthgs: {
      type: Array,
    },
  })
);
export default Idea;
