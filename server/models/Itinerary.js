// server/models/Itinerary.js
import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  preferences: { type: String },
  createdAt: { type: Date, default: Date.now },
  days: { type: Array } // we’ll fill this after AI generates the plan
});
 
export default mongoose.model("Itinerary", itinerarySchema);