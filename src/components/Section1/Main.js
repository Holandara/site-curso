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
        <div className="images">
          {/* Content for the right block */}
          <div className="image1">
            <img src="blob.svg" alt="blob" />
          </div>
          <div className="image2">
            <img src="blob-line.svg" alt="blob line" />
          </div>
          <div className="image3">
            <img src="foto-braco.jpg" alt="img braco" />
          </div>
          <div className="image4">
            <img src="Fitchek_Baixa-1.jpg" alt="img fitcheck" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
