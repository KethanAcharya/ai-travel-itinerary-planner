// server/routes/itineraryRoutes.js
import express from "express";
import { generateItinerary, saveItinerary, getItineraries, deleteItinerary, updateItinerary } from "../controllers/itineraryController.js";

const router = express.Router();

// POST /api/itineraries/generate
router.post("/generate", generateItinerary);

// POST /api/itineraries/save
router.post("/save", saveItinerary);

// GET /api/itineraries
router.get("/", getItineraries);

router.delete("/:id", deleteItinerary);

router.put("/:id", updateItinerary);

export default router;
