// server/routes/itineraryRoutes.js
import express from "express";
import { generateItinerary, saveItinerary, getItineraries } from "../controllers/itineraryController.js";

const router = express.Router();

// POST /api/itineraries/generate
router.post("/generate", generateItinerary);

// POST /api/itineraries/save
router.post("/save", saveItinerary);

// GET /api/itineraries
router.get("/", getItineraries);

export default router;
