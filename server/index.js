import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import { connectDB } from "./config/mongo.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API working!");
});

// Mount itinerary routes
app.use("/api/itineraries", itineraryRoutes);

// Connect to DB then start server
connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
});
