import { useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  }

  return (
    <div
      className="tracker-area"
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}

export default MouseTracker;
