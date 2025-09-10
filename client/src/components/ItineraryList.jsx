// src/components/ItineraryList.jsx
export default function ItineraryList({ itineraries, onEdit, onDelete }) {
  return (
    <div className="itinerary-list">
      <h2>Saved Itineraries</h2>
      {itineraries.length === 0 && <p>No itineraries yet.</p>}
      {itineraries.map((it) => (
        <div className="itinerary-item" key={it._id}>
          <h3>{it.destination}</h3>
          <p>
            {new Date(it.startDate).toLocaleDateString()} –{" "}
            {new Date(it.endDate).toLocaleDateString()}
          </p>
          <p>Preferences: {it.preferences || "none"}</p>
          <button onClick={() => onEdit(it)}>Edit</button>{" "}
          <button onClick={() => onDelete(it._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
