import { useState } from "react";
import styles from "../styles/player.module.css";

export function Player(props) {
  const [score, setScore] = useState(props.score);

  function increment() {
    setScore(score + 1);
  }
  function decrement() {
    setScore(score - 1);
  }
  return (
    <tr className={styles.player}>
      <td className={styles.numbers}>{props.number + 1}</td>
      <td>{props.name}</td>
      <td className={styles.age}>{props.age}</td>
      <td>{props.position}</td>
      <td className={styles.score}>
        <button onClick={decrement}>-</button>
        {score}
        <button onClick={increment}>+</button>
      </td>
    </tr>
  );
}
