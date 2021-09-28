import React from "react";
import DefaultCard from "../../../components/Default-card.component";

export default class DeathComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deaths: [],
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/deaths")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ deaths: r });
      })
      .catch((err) => console.error(`Opps, tivemos um problema: ${err}`));
  }

  render() {
    const { deaths } = this.state;
    return (
      <div className="tab">
        <h1>Mortes de Breaking Bad</h1>

        <section className="episode-list">
          {deaths.map((c) => (
            <DefaultCard
              key={c.death_id}
              title={c.death}
              description={`Episódio: ${c.episode}`}
              secondaryDescription={`S${c.season}`}
              contentText={`Últimas palavras: ${c.last_words}`}
              principalTitle={`Causa: ${c.cause}`}
              subTitle={`Responsável: ${c.responsible}`}
            />
          ))}
        </section>
      </div>
    );
  }
}
