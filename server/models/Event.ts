import { Schema, model } from "mongoose";

const Event = new Schema({
  idEventCalendarGoogle: { type: String },
  eventTitle: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: Object, required: true },
  goal: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  completed: {type: Boolean},
  members: {type: Array}
});

export default model("Event", Event);
