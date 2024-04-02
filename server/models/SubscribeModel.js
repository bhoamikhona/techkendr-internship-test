import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema({
  email: String,
});

export default mongoose.model("Subscribe", SubscribeSchema);
