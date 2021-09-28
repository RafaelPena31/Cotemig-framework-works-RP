import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default class CharacterCard extends React.Component {
  render() {
    return (
      <Card
        style={{ width: 300 }}
        className="break-card"
        hoverable
        cover={<img alt="breaking-bad-character" src={this.props.img} />}
        title={`${this.props.name}`}
      >
        <h2>{`Nickname: ${this.props.nick}`}</h2>
        <h4>{`Ocupação: ${this.props.todo}`}</h4>
        <Meta
          title={`Status: ${this.props.status} - nick: ${this.props.nick}`}
          description={`Nascimento: ${this.props.birthday}`}
        />
      </Card>
    );
  }
}
