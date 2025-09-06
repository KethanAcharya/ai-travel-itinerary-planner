// server/controllers/itineraryController.js

// dummy functions for now
export const generateItinerary = async (req, res) => {
  const { destination, startDate, endDate, preferences } = req.body;

  // For now just return mock itinerary
  const mockPlan = [
    { day: 1, activities: ["Arrive at destination", "Check-in at hotel"] },
    { day: 2, activities: ["City tour", "Local cuisine tasting"] },
  ];

  res.json({
    destination,
    startDate,
    endDate,
    preferences,
    plan: mockPlan,
  });
};

export const saveItinerary = async (req, res) => {
  // later: save to MongoDB
  res.json({ message: "Itinerary saved successfully" });
};

export const getItineraries = async (req, res) => {
  // later: fetch from MongoDB
  res.json([]);
  // res.json({ message: "Itinerary saved successfully" });
};
