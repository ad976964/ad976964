import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import TrackOrder from "./TrackOrder";
import Subscription from "./Subscription";
import FAQ from "./FAQ"; // ✅ Import FAQ Page
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/faq" element={<FAQ />} /> {/* ✅ Add FAQ Route */}
      </Routes>
    </div>
  );
}

export default App; // ✅ Ensure App.js is exported properly
