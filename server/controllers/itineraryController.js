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

export const deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    res.json({ message: "Itinerary deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete" });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const { id } = req.params;

    // req.body contains the new fields to update
    const updated = await Itinerary.findByIdAndUpdate(id, req.body, {
      new: true // return updated document
    });

    if (!updated) {
      return res.status(404).json({ error: "Itinerary not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update itinerary" });
  }
};
