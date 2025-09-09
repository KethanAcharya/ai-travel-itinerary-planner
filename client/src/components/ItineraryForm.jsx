import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/itineraries/save";

export default function ItineraryForm({ form, setForm, onSubmit, editing, message }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        display: "grid",
        gap: "10px",
        maxWidth: "500px",
        margin: "0 auto"
      }}
    >
      <h2>{editing ? "Edit Itinerary" : "Add Itinerary"}</h2>

      <div>
        <label>Destination:</label><br />
        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Start Date:</label><br />
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>End Date:</label><br />
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Preferences:</label><br />
        <input
          type="text"
          name="preferences"
          value={form.preferences}
          onChange={handleChange}
          placeholder="e.g., Museums, Food, Adventure"
        />
      </div>

      <button type="submit">
        {editing ? "Update Itinerary" : "Save Itinerary"}
      </button>

      {message && (
        <p style={{ color: message.includes("Error") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
}
