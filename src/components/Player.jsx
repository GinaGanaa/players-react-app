import { useState } from "react";
import styles from "../styles/player.module.css";

export function Player(props) {
  //destructuring
  const { number, name, score, age, position, players, setPlayers } = props;

  function decrementScore() {
    players[number].score = players[number].score - 1;
    setPlayers([...players]);
  }
  function incerementScore() {
    players[number].score = players[number].score + 1;
    setPlayers([...players]);
  }
  return (
    <tr className={styles.player}>
      <td className={styles.numbers}>{number + 1}</td>
      <td>{name}</td>
      <td className={styles.age}>{age}</td>
      <td>{position}</td>
      <td className={styles.score}>
        <button onClick={() => decrementScore()}>-</button>
        {score}
        <button onClick={() => incerementScore()}>+</button>
      </td>
    </tr>
  );
}
