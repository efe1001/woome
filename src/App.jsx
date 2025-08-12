import React from "react";
import "./index.css"; // ✅ Tailwind styles
import Homepage from "./component/HomePage"; // ✅ Import your homepage

function App() {
  return (
    <div className="min-h-screen">
      <Homepage />
    </div>
  );
}

export default App;
