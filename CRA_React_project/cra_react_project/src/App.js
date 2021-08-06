import "./App.css";
import Header from "./components/Header";

export default function App() {
  const onClickLogin = () => {
    console.log("clicked");
  };

  return (
    <div className="App">
      <Header
        title="Cotemig"
        subtitle="Colégio e Faculdade"
        onClick={onClickLogin}
      >
        <h3>Revolucionando a educação</h3>
      </Header>
    </div>
  );
}
