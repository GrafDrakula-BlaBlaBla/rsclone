import { Schema, model, ObjectId } from "mongoose";

const Event = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  nameEvent: { type: String, required: true },
  location: { type: String, required: true },
  goals: { type: String },
  description: { type: String },
  photo: { type: String },
});

export default model("Event", Event);
