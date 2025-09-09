import Itinerary from "../models/Itinerary.js";

// This one will later call the AI API
export const generateItinerary = async (req, res) => {
  try {
    // for now, just echo back what was sent
    res.json({ message: "Itinerary generated!", data: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const saveItinerary = async (req, res) => {
  try {
    const { destination, startDate, endDate, preferences, days } = req.body;

    const newItinerary = new Itinerary({
      destination,
      startDate,
      endDate,
      preferences,
      days, // optional for now
    });

    await newItinerary.save();
    res.status(201).json(newItinerary);
  } catch (err) {
    console.error("Error saving itinerary:", err);
    res.status(500).json({ error: "Server error while saving itinerary" });
  }
};

// Get all itineraries
export const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().sort({ createdAt: -1 }); // newest first
    res.json(itineraries);
  } catch (err) {
    console.error("Error fetching itineraries:", err);
    res.status(500).json({ error: "Server error while fetching itineraries" });
  }
};
