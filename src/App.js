import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import EmployerRoute from "./navigation/EmployerRoute";


function App() {
  return (
    <Router >
      <EmployerRoute/>

    </Router>
    
  );
}

export default App;
