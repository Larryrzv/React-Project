import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="App">
      <div className="div1">
        <p className="aQuienMas">A quién seguir</p>
      </div>
      <TwitterFollowCard
        formatUserName={format}
        userName="kikobeats?ttlh1"
        user="RandomGuy1"
        initialIsFollowing
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="Userrandom"
        user="RandomGuy2"
        initialIsFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={format}
        userName="Somebodymore"
        user="RandomGuy3"
        initialIsFollowing={false}
      />
      <div className="div2">
        <p className="mostrarMas">Mostrar más</p>
      </div>
    </section>
  );
}
