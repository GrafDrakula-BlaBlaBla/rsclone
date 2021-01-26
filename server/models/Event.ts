import { Schema, model, ObjectId } from "mongoose";

const Event = new Schema({
  Calendar: { type: String },
  eventTitle: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: Object, required: true },
  goal: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model("Event", Event);

// eventTitle: observable,
//       time: observable,
//       startDate: observable,
//       endDate: observable,
//       goal: observable,
//       description: observable,
//       getEventTitle: action,
//       getEventTime: action,
//       getEventStartDate: action,
//       getEventEndDate: action,
//       getEventGoal: action,
//       getEventDescription: action,
//       createEventCalendar: action,
