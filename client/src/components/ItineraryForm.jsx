export default function ItineraryForm({ form, setForm, onSubmit, editing, message }) {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (form.destination.trim().length < 3) {
      setMessage("Destination must be at least 3 characters long");
      return false;
    }
    if (new Date(form.startDate) > new Date(form.endDate)) {
      setMessage("Start date cannot be after end date");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="itinerary-form"
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
          minLength={3}
          maxLength={50}
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
          min={new Date().toISOString().split("T")[0]}
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
