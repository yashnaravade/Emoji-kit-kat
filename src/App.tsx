import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("👻");

  return (
    <>
      <div className="container-fluid">
        <div className="title-container">
          <h1 className="heading mt-2">Emoji Kit 👻</h1>
        </div>

        <div className="row">
          <div className="emoji-editor-container col-6">
            <h3>Output:</h3>
            <div className="main-emoji-container">
              <div className="main-emoji" style={{ backgroundColor: "maroon" }}>
                <div className="emoji">{emoji}</div>
              </div>
              <div className="emoji-container">
                <div className="emoji" onClick={() => setEmoji("⚰️")}>
                  ⚰️
                </div>

                <div className="emoji" onClick={() => setEmoji("👻")}>
                  👻
                </div>

                <div className="emoji" onClick={() => setEmoji("🍑")}>
                  🍑
                </div>

                <div className="emoji" onClick={() => setEmoji("👀")}>
                  👀
                </div>

                <div className="emoji" onClick={() => setEmoji("🗿")}>
                  🗿
                </div>

                <div className="emoji" onClick={() => setEmoji("💀")}>
                  💀
                </div>
              </div>
            </div>
          </div>

          <div className="control-editor col-6">
            <h3>Input:</h3>
            <div className="control-container">
              <div className="color-item bg-red">Red</div>
              <div className="color-item bg-purple">Purple</div>
              <div className="color-item bg-pink">Pink</div>
              <div className="color-item bg-orange">Orange</div>
              <div className="color-item bg-green">Green</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
