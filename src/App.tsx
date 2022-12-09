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
      </div>

      <div className="main-emoji-container">
        <div className="main-emoji">
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
    </>
  );
}

export default App;
