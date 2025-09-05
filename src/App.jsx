import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<div>LoginPage</div>} />
        <Route path="/test" element={<div>TestPage</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
