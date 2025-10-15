import React from "react";
import { Rnd } from "react-rnd";

export default function Overlay({ overlay, onUpdate }) {
  const handleDragStop = (e, d) => {
    if (onUpdate) {
      onUpdate(overlay._id, { x: d.x, y: d.y, width: overlay.width, height: overlay.height });
    }
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    if (onUpdate) {
      onUpdate(overlay._id, {
        x: position.x,
        y: position.y,
        width: parseInt(ref.style.width),
        height: parseInt(ref.style.height),
      });
    }
  };

  return (
    <Rnd
      size={{ width: overlay.width || 100, height: overlay.height || 50 }}
      position={{ x: overlay.x || 0, y: overlay.y || 0 }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
    >
      {overlay.type === "text" ? (
        <div style={{ background: "rgba(0,0,0,0.4)", color: "#fff", padding: 6 }}>
          {overlay.content}
        </div>
      ) : (
        <img
          src={overlay.content}
          alt={overlay.name}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </Rnd>
  );
}
