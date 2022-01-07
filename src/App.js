import "./App.css";
import justin from "./imgs/98414668_2716434151972843_3792080579017572352_n.jpg";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#ddd" }}>I MISS JUSTIN</h1>
      <div className="image">
        <img src={justin} alt="i miss justin" />
      </div>
      <Countdown />
    </div>
  );
}

export default App;
