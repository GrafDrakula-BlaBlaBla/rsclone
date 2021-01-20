import { Schema, model, ObjectId } from "mongoose";

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  range: { type: Number },
  avatar: { type: String },
  dataRegistartion: { type: Date },
  sex: String,
  contacts: { type: Array },
  location: { type: Object },
  finishedGame: { type: Boolean },
  // event: [{ type: ObjectId, ref: "Event" }],
});

export default model("User", User);
