import "./App.css";
import React, { useState } from "react";
import { ReactReader } from "react-reader";

function App() {
  const [location, setLocation] = useState("");
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader url="files/book1.epub" />
    </div>
  );
}

export default App;
