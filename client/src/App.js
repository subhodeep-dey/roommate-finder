import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import NavTabs from "./components/TabBar/NavTabs";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <NavTabs />
      <Footer />
    </Router>
  );
};

export default App;
