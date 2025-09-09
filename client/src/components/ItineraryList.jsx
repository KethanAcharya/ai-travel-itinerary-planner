import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/itineraries";

export default function ItineraryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setItems(res.data)).catch(console.error);
  }, []);

  const handleDelete = async (id) => {
  await axios.delete(`http://localhost:5000/api/itineraries/${id}`);
  setItems(items.filter(it => it._id !== id));
};

  return (
    <div style={{maxWidth:"600px",margin:"20px auto"}}>
      <h2>Saved Itineraries</h2>
      {items.length === 0 && <p>No itineraries yet.</p>}
      {items.map(it => (
        <div key={it._id} style={{border:"1px solid #ccc",padding:"10px",marginBottom:"10px"}}>
          <h3>{it.destination}</h3>
          <p>{new Date(it.startDate).toLocaleDateString()} – {new Date(it.endDate).toLocaleDateString()}</p>
          <p>Preferences: {it.preferences || "none"}</p>
          <button onClick={() => handleDelete(it._id)}>Delete</button>
        </div>
      ))}
    </div>
    
  );
}


