import React from "react";
import ProjectPortfolio from "./components/ProjectPortfolio";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="noise-bg relative min-h-screen">
      <ScrollProgress />
      <ProjectPortfolio />
    </div>
  );
}

export default App;
