import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import GroupScore from "./pages/GroupScore/GroupScore";
import DashboardHome from "./pages/dashboard/home/Home"; 
import Slide from "./components/Carousel/carousel"
// import ManageScores from "./pages/Dashboard/ManageScores"; 
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* User pages */}
        <Route path="/score" element={<GroupScore />} />
        <Route path="/tv" element={<Slide/>} />
        <Route
          path="/score/:category"
          element={
            <div>
              <h1>Category:</h1>
            </div>
          }
        />

        {/* Dashboard pages */}
        <Route path="/dashboard" element={<DashboardHome />} />
        {/* <Route path="/dashboard/manage-scores" element={<ManageScores />} /> */}

        {/* Catch-all */}
        <Route path="/" element={<GroupScore />} />
      </Routes>
    </>
  );
}

export default App;
