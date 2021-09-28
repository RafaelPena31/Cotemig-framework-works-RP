import React from "react";
import CharacterCard from "../../../components/Character-card.component";

export default class CharacterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ characters: r });
      })
      .catch((err) => console.error(`Opps, tivemos um problema: ${err}`));
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="tab">
        <h1>Personagens de Breaking Bad</h1>

        <section className="episode-list">
          {characters.map((c) => (
            <CharacterCard
              key={c.char_id}
              name={c.name}
              nick={c.nickname}
              img={c.img}
              status={c.status}
              birthday={c.birthday}
              todo={c.occupation}
            />
          ))}
        </section>
      </div>
    );
  }
}
