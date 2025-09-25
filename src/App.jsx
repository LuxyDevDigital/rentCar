import React from "react";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
const App = () => {
  return (
    <Routes>
      <Route path="/rentCar/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
