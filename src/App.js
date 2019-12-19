import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
        <div className="cell small-4">cell</div>
      </Container>
    </>
  );
}

export default App;
