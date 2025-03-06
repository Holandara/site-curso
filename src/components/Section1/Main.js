import React from "react";
import "./Main.css";

const MainSection = () => {
  return (
    <main className="App-main" id="home">
      <div className="left-block">
        {/* Content for the left block */}
        <div></div>
        <div></div>
        
      </div>
      <div className="right-block">
        {/* Content for the right block */}
        <h1>Right Block</h1>
        <p>This is the content for the right block.</p>
      </div>
    </main>
  );
};

export default MainSection;
