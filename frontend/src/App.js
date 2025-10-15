import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer";
import OverlayEditor from "./components/OverlayEditor";

function App() {
  const [overlays, setOverlays] = useState([]);
  const [streamUrl, setStreamUrl] = useState("");

  const fetchOverlays = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/overlays");
      setOverlays(res.data);
    } catch (err) {
      console.error("Failed to fetch overlays:", err);
    }
  };

  useEffect(() => { fetchOverlays(); }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>RTSP Overlay App</h1>
      <input
        placeholder="HLS stream URL (m3u8) or MP4"
        value={streamUrl}
        onChange={e => setStreamUrl(e.target.value)}
        style={{ width: 400, marginBottom: 10 }}
      />
      <VideoPlayer streamUrl={streamUrl} overlays={overlays} fetchOverlays={fetchOverlays} />
      <OverlayEditor onSaved={fetchOverlays} />
    </div>
  );
}

export default App;
