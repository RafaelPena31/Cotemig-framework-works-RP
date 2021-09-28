import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default class EpisodeCard extends React.Component {
  render() {
    return (
      <Card
        className="break-card"
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="breaking-bad-cover"
            src="https://divulgar-site.com/wp-content/uploads/2015/11/licoes-de-marketing-que-aprendi-com-breaking-bad.png"
          />
        }
      >
        <Meta
          title={this.props.name}
          description={`${this.props.date} - episode: ${this.props.number} | S${this.props.season}`}
        />
      </Card>
    );
  }
}
