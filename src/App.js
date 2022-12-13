// DEPENDENCIES
import React from "react";

// COMPONENTS
import Navbar from "./components/navigation/Navbar";
import CoverLetter from "./components/CoverLetter";
import ProjectList from "./components/projects/ProjectList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App mobile">
      <Navbar />
      <CoverLetter />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
