import React from "react";
import "./App.css";
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
