const PlayerScore = ( {data} ) => {
    return (
      <tr>
        <td className="playerNameCell">{data.n}</td>
        <td className="scoreCell">{data.s}</td>
      </tr>
    );
}

export default PlayerScore;