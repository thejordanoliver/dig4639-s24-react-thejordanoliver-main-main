import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sidebar 1</p>
        <Sidebar
          initialMenuItems={[
            "Daffy Duck",
            "Bugs Bunny",
            "Elmer Fud",
            "Tweety",
            "Yosimite Sam",
          ]}
        ></Sidebar>
      </header>
    </div>
  );
}

export default App;
