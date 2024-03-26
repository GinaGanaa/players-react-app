import { Player } from "./Player";
import style from "../styles/playerList.module.css";
import { useState } from "react";
import styles from "../styles/header.module.css";

export const PlayerList = (props) => {
  props.players.sort((player1, player2) => {
    return player1.score - player2.score;
  });
  const [players, setPlayers] = useState(props.players);

  props.players.sort((player1, player2) => {
    return player1.age - player2.age;
  });

  //dasgal 1
  //orj irj baigaa players iig sortlood shine huvisagchid hiij baigaad
  // daraa n ter huvisagchaa mapdaj  haruulna
  // useState

  //dasgal 2
  // score bolgonii ard 2 + - tovchluuruud hiine

  //dasgal 3
  //players iig useState dotor hiij ogood tendees garch irj bui huvisagch
  //deeguur map ergej togologchdiig hevledeg bolgono

  //dasgal 4
  // ene dasgaliig hiihiin tuld useState heregtei
  //age iin ard neg tovch
  // score iin ard neg tovch
  //edgeer tovch deer darhad sortlono
  return (
    <table className={style.playerList}>
      <thead className={styles.secondHeader}>
        <tr>
          <th className={style.hashtag}>#</th>
          <th>Name</th>
          <th>
            <button className={style.sort}>Click to sort by:</button> Age
          </th>

          <th>Position</th>
          <th>
            <button className={style.sort}>Click to sort by:</button> Score
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => {
          return (
            <Player
              key={index}
              number={index}
              name={player.name}
              score={player.score}
              age={player.age}
              position={player.position}
            />
          );
        })}
      </tbody>
    </table>
  );
};
