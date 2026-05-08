import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema({
  userId: { type: String, index: true, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false, index: true },
  payload: { type: Object, default: {} }
}, { timestamps: true });
export const Notification = mongoose.model("Notification", notificationSchema);
