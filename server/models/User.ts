import { Schema, model } from "mongoose";

const User = new Schema({
  calendarId: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  range: { type: Number },
  avatar: { type: String },
  dataRegistartion: { type: Date },
  sex: { type: String },
  contacts: { type: Array },
  location: { type: Object },
  finishedGameDate: { type: Date },
});

export default model("User", User);
