// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import {connectDB} from "./config/mongo.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/itineraries", itineraryRoutes);

connectDB();

// const Itinerary = mongoose.model("Itinerary", itinerarySchema);

// 3. Test GET route
app.get("/", (req, res) => {
  res.send("API working!");
});

// 4. POST route
app.post("/api/itineraries", async (req, res) => {
  try {
    const { destination, startDate, endDate, preferences } = req.body;

    const itinerary = new itinerary({
      destination,
      startDate,
      endDate,
      preferences,
    });

    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Server started on port 5000"));