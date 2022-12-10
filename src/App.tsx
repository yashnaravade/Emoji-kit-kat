import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("👻");
  const [emojiColor, setEmojiColor] = useState("red");
  const [emojiSize, setEmojiSize] = useState(35);
  const [emojiRotate, setEmojiRotate] = useState(1);

  return (
    <>
      <div className="container-fluid">
        <div className="title-container">
          <h1 className="heading mt-2">Emoji Kit 👻</h1>
        </div>

        <div className="row">
          <div className="emoji-editor-container col-md-6">
            <h3>Output:</h3>
            <div className="main-emoji-container">
              <div
                className="main-emoji-box"
                style={{
                  backgroundColor: emojiColor,
                  transform: `rotate(${emojiRotate}deg)`,
                }}
              >
                <div
                  className="main-emoji"
                  style={{ fontSize: `${emojiSize}px` }}
                >
                  {emoji}
                </div>
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

          <div className="control-editor col-md-6">
            <h3>Input:</h3>

            <div className="color-select">
              <div className="control-container">
                <div className="color-options">
                  <div
                    className="color-item bg-red"
                    onClick={() => setEmojiColor("#ff0000")}
                  ></div>
                  <div
                    className="color-item bg-purple"
                    onClick={() => setEmojiColor("#800080")}
                  ></div>
                  <div
                    className="color-item bg-pink"
                    onClick={() => setEmojiColor("#ffc0cb")}
                  ></div>
                  <div
                    className="color-item bg-orange"
                    onClick={() => setEmojiColor("#ffa500")}
                  ></div>
                  <div
                    className="color-item bg-green"
                    onClick={() => setEmojiColor("green")}
                  ></div>
                </div>
                <div className="size-control">
                  <div className="control-label">Size</div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    onChange={(e) => {
                      setEmojiSize(e.target.value);
                    }}
                  />
                </div>

                <div className="rotate-control">
                  <div className="control-label">Rotate</div>
                  <input
                    type="range"
                    min="1"
                    max="360"
                    onChange={(e) => {
                      setEmojiRotate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
