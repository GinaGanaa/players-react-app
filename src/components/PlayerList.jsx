import { Player } from "Player.jsx";
import style from "../styles/playerList.module.css";
import { useState } from "react";
import styles from "../styles/header.module.css";

export const PlayerList = (props) => {
  const [players, setPlayers] = useState(props.players);
  // function changeAge() {
  //   players[0].age = players[0].age + 1;
  //   setPlayers([...players]);
  // }

  function sortByAge() {
    players.sort((player1, player2) => {
      return player1.age - player2.age;
    });
    setPlayers([...players]);
  }

  function sortByScore() {
    console.log("sorting");
    players.sort((players1, players2) => {
      return players1.score - players2.score;
    });
    console.log("sorted:", players);
    setPlayers([...players]);
  }
  // players[0].age = 100;
  // console.log(players);

  return (
    <table className={style.playerList}>
      {/* <button onClick={() => changeAge()}>change age</button> */}
      <thead className={styles.secondHeader}>
        <tr>
          <th className={style.hashtag}>#</th>
          <th>Name</th>
          <th>
            <button onClick={() => sortByAge()} className={style.sort}>
              Click to sort by:
            </button>{" "}
            Age
          </th>

          <th>Position</th>
          <th>
            <button onClick={() => sortByScore()} className={style.sort}>
              Click to sort by:
            </button>{" "}
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, index) => {
          return (
            <Player
              key={index}
              number={index}
              name={player.name}
              score={player.score}
              age={player.age}
              position={player.position}
              players={players}
              setPlayers={setPlayers}
            />
          );
        })}
      </tbody>
    </table>
  );
};
