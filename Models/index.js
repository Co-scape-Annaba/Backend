import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import User from "./user.schema.js";
import Idea from "./idea.schema.js";

const db = {};

db.mongoose = mongoose;

db.user = User;
db.idea = Idea;

export default db;
