import MouseTracker from "./components/MouseTracker";
import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>Mouse Tracker Example</h1>

      <MouseTracker
        render={(pos) => (
          <h2>
            Mouse Position: {pos.x} , {pos.y}
          </h2>
        )}
      />

    </div>
  );
}

export default App;
