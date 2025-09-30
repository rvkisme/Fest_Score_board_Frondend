// import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import GroupScore from "./pages/GroupScore/GroupScore";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      
      <nav className="p-2">
        <Link to="/score">Home</Link>
      </nav>

      <Routes>
        <Route path="/score" element={<GroupScore />} />
        <Route
          path="/:category"
          element={
            <div>
              <h1>Category:</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
