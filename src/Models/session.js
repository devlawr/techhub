import mongoose from "mongoose";
const Session = mongoose.model(
  "Session",
  new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    country: String,
  })
);
export default Session;
