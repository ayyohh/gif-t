import React from "react";
import { Route, Routes } from "react-router-dom";

import classes from "./App.css";
import HomeSearchPage from "./Pages/Homepage-Search/HomeSearchPage";
import NavBar from "./Components/Navbar/NavBar";
import SavedGifsPage from "./Pages/SavedGifsPage";
import ProfilePage from "./Pages/ProfilePage";
import AdminPage from "./Pages/AdminPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeSearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/savedgifs" element={<SavedGifsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
