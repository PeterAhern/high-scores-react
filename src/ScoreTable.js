import TableHeadings from "./TableHeadings";
import PlayerScore from "./PlayerScore";

const ScoreTable = (props) => {
  return (
    <div className="tableContainer">
      {props.data
        .sort((a, b) => a.name > b.name)
        .map((country, index) => {
          return (
            <table className="countryTable">
              <thead>
                <tr className="tableHeading" key={index}>
                  High Scores: {country.name}
                </tr>
              </thead>
              <TableHeadings />
              <tbody>
                {country.scores
                  .sort((a, b) => (a.s < b.s && 1) || -1)
                  .map((playerScore, index) => (
                    <PlayerScore key={index} data={playerScore} />
                  ))}
              </tbody>
            </table>
          );
        })}
    </div>
  );
};

export default ScoreTable;
