import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Overlay from "./Overlay";
import OverlayEditor from "./OverlayEditor";
import axios from "axios";

export default function VideoPlayer({ streamUrl }) {
  const [overlays, setOverlays] = useState([]);

  // Fetch overlays from backend
  const fetchOverlays = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/overlays");
      setOverlays(res.data);
    } catch (err) {
      console.error("Failed to fetch overlays:", err);
    }
  };

  useEffect(() => {
    fetchOverlays();
  }, []);

  // Update overlay position or size
  const updateOverlay = async (id, data) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/overlays/${id}`, data);
      setOverlays((prev) =>
        prev.map((ov) => (ov._id === id ? { ...ov, ...data } : ov))
      );
    } catch (err) {
      console.error("Failed to update overlay:", err);
    }
  };

  // Add a new overlay
  const addOverlay = (newOverlay) => {
    setOverlays([...overlays, newOverlay]);
  };

  return (
    <div style={{ padding: 20 }}>
      <OverlayEditor onSaved={addOverlay} />

      <div style={{ position: "relative", width: "100%", maxWidth: 960 }}>
        <ReactPlayer
          url={streamUrl}
          playing={true}
          controls={true}
          width="100%"
          height="540px"
        />

        {overlays.map((ov) => (
          <Overlay
            key={ov._id}
            overlay={ov}
            updateOverlay={updateOverlay} // Pass update function
          />
        ))}
      </div>
    </div>
  );
}
