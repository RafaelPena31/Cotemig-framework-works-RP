import React from "react";
import DefaultCard from "../../../components/Default-card.component";

export default class PhraseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ quotes: r });
      })
      .catch((err) => console.error(`Opps, tivemos um problema: ${err}`));
  }

  render() {
    const { quotes } = this.state;
    return (
      <div className="tab">
        <h1>Frases de Breaking Bad</h1>

        <section className="episode-list">
          {quotes.map((q) => (
            <DefaultCard
              key={q.quote_id}
              title={q.quote_id}
              metaTitle={`Autor: ${q.author}`}
              principalTitle={q.series}
              description={`Citação: ${q.quote}`}
              secondaryDescription={q.quote_id}
            />
          ))}
        </section>
      </div>
    );
  }
}
