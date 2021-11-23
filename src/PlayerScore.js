const PlayerScore = ( {data} ) => {
    return (
      <tr>
        <td>RankingNumber</td>
        <td>{data.n}</td>
        <td>{data.s}</td>
      </tr>
    );
}

export default PlayerScore;