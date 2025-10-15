import React, { useState } from "react";
import axios from "axios";

export default function OverlayEditor({ onSaved }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("text");
  const [content, setContent] = useState("");
  const [x, setX] = useState(50);

  const save = async () => {
    try {
      const payload = {
        name,
        type,
        content,
        x: parseInt(x),
        y: 0,
        width: 150,
        height: 50,
      };

      // Save to backend
      const res = await axios.post("http://127.0.0.1:5000/api/overlays", payload);

      // Reset input fields
      setName("");
      setContent("");
      setX(50);

      // Pass newly created overlay to parent
      if (onSaved) onSaved({ ...payload, _id: res.data.id });
    } catch (err) {
      console.error("Failed to save overlay:", err);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="image">Image</option>
      </select>
      <input
        placeholder={type === "text" ? "Text" : "Image URL"}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="number"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <button onClick={save}>Save Overlay</button>
    </div>
  );
}