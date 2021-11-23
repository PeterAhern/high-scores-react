import TableHeadings from "./TableHeadings";
import PlayerScore from "./PlayerScore";

const ScoreTable = (props) => {
  return (
    <div className="tableContainer">
      {props.data.map((country, index) => {
        return (
          <table className="countryTable">
            <thead>
              <tr>High Scores: {country.name}</tr>
            </thead>
            <TableHeadings />
            <tbody>
              {/* {country.scores.map((playerScore) => {
                return (
                  <tr>
                    <td>RankingNumber</td>
                    <td>{playerScore.n}</td>
                    <td>{playerScore.s}</td>
                  </tr>
                );
              })} */}
              
              {country.scores.map((playerScore) => <PlayerScore data={playerScore}/>)}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default ScoreTable;
