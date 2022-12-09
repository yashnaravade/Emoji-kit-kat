import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="title-container">
          <h1 className="heading mt-2">Emoji Kit 👻</h1>
        </div>
      </div>

      <div className="main-emoji-container">
        <div className="main-emoji">
          <div className="emoji">👻</div>
          
        </div>
        <div className="emoji-container">
          <div className="emoji">⚰️</div>
          <div className="emoji">🍑</div>
          <div className="emoji">👀</div>
          <div className="emoji">🗿</div>
          <div className="emoji">💀</div>
        </div>
      </div>
    </>
  );
}

export default App;
