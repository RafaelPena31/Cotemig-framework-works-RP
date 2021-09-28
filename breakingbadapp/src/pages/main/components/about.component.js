import React from "react";

export default class AboutComponent extends React.Component {
  render() {
    return (
      <div className="tab">
        <h1>Sobre Breaking Bad</h1>
        <img
          className="big-img"
          src="https://presleyson.com.br/wp-content/uploads/2018/12/breaking-bad-800x800-min-1280x720.png"
          alt="breaking-bad"
        />
      </div>
    );
  }
}
