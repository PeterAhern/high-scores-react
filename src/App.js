import "./App.css";
import allCountryScores from "./scores";
import ScoreTable from "./ScoreTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">High Scores by Country</header>
      <ScoreTable data={allCountryScores} />
    </div>
  );
}

export default App;
