// src/App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import ItineraryForm from "./components/ItineraryForm";
import ItineraryList from "./components/ItineraryList";

const API_URL = "http://localhost:5000/api/itineraries";

export default function App() {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    preferences: ""
  });
  const [itineraries, setItineraries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // Load all itineraries once at start
  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      const res = await axios.get(API_URL);
      setItineraries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    try {
      const data = { ...form, days: [] };
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, data);
        setMessage("Itinerary updated successfully!");
        setEditingId(null);
      } else {
        await axios.post(`${API_URL}/save`, data);
        setMessage("Itinerary saved successfully!");
      }
      setForm({ destination: "", startDate: "", endDate: "", preferences: "" });
      fetchItineraries();
    } catch (err) {
      console.error(err);
      setMessage("Error saving itinerary. Check console.");
    }
  };

  const handleEdit = (it) => {
    setForm({
      destination: it.destination,
      startDate: it.startDate.slice(0, 10),
      endDate: it.endDate.slice(0, 10),
      preferences: it.preferences || ""
    });
    setEditingId(it._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItineraries();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Travel Itinerary Planner</h1>
      <ItineraryForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editing={!!editingId}
        message={message}
      />
      <ItineraryList
        itineraries={itineraries}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}