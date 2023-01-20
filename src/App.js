import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MoreInfo from "./components/MoreInfo";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Styles/Header.css";
import "./Styles/Search.css"
import "./Styles/Country.css"
import "./Styles/Moreinfo.css"

const App = () => {
  const [theme, setTheme] = useState(false);
  let navigate = useNavigate();

  const handleTheme = () => {
    setTheme(!theme);
  };



  return (
    <div>
      <div className={theme ? "darkTheme App" : "lightTheme App"}>
        <Header handleTheme={handleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} navigate={navigate} />} />
          <Route path="moreinfo" element={<MoreInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
