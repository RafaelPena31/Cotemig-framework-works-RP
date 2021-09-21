import React from "react";

export default class Lifecycle extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h1>Lifecycle</h1>
      </div>
    );
  }
}
