import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="App">
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
    </section>
  );
}
