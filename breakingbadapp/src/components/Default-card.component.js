import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default class DefaultCard extends React.Component {
  render() {
    return (
      <Card
        className="break-card"
        hoverable
        style={{ width: 300 }}
        title={this.props.title}
        cover={
          <img
            alt="breaking-bad-cover"
            src={
              this.props.img ??
              "https://http2.mlstatic.com/D_NQ_NP_647363-MLB27139539827_042018-O.jpg"
            }
          />
        }
      >
        <h2>{this.props.principalTitle}</h2>
        <h3>{this.props.subTitle}</h3>
        <h4>{this.props.contentText}</h4>

        <Meta
          title={this.props.metaTitle}
          description={`${this.props.description} - ${this.props.secondaryDescription}`}
        />
      </Card>
    );
  }
}
