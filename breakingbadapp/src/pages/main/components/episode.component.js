import React from "react";
import EpisodeCard from "../../../components/Episode-card.component";

export default class EpisodeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ episodes: r });
      })
      .catch((err) => console.error(`Opps, tivemos um problema: ${err}`));
  }

  render() {
    const { episodes } = this.state;
    return (
      <div className="tab">
        <h1>Episódios de Breaking Bad</h1>

        <section className="episode-list">
          {episodes.map((ep) => (
            <EpisodeCard
              key={ep.id}
              name={ep.title}
              number={ep.episode}
              date={ep.air_date}
              season={ep.season}
            />
          ))}
        </section>
      </div>
    );
  }
}
