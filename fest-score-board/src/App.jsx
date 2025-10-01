import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import GroupScore from "./pages/GroupScore/GroupScore";
import DashboardHome from "./pages/dashboard/home/Home"; 
// import ManageScores from "./pages/Dashboard/ManageScores"; 
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <nav className="p-2 flex gap-4">
        <Link to="/score">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        {/* User pages */}
        <Route path="/score" element={<GroupScore />} />
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
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
