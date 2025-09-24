import logo from './logo.svg';
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
