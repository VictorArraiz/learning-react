import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing={true}
        userName={"arraizv"}
        name="Victor Arraiz Blasini"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName={"arraizv"}
        name="Victor Arraiz Blasini"
      />
      <TwitterFollowCard
        isFollowing={true}
        userName={"pheralb"}
        name="Jose Hernandez"
      />
    </section>
  );
}

export default App;
