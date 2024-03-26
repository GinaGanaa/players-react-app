import { players } from "./data";
import { PlayerList } from "./components/PlayerList";
import "./styles/global.css";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <PlayerList players={players} />
    </div>
  );
}
