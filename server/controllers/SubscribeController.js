import SubscribeModel from "../models/SubscribeModel.js";

export const addSubscribe = async function (req, res) {
  try {
    const { email } = req.body;
    const existingUser = await SubscribeModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "You are already subscribed." });
    } else {
      const newSubscription = await SubscribeModel.create({ email });
      res.status(201).json({ message: "Subscribed!", data: newSubscription });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
