import React from "react";
import Lifecycle from "./components/Lifecycle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLifecycleComponentAvailable: false,
    };
  }

  onHandleReleaseLifeCycleComponent = () => {
    this.setState((state) => ({
      isLifecycleComponentAvailable: !state.isLifecycleComponentAvailable,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onHandleReleaseLifeCycleComponent}>
          Release lifecycle component
        </button>
        {this.state.isLifecycleComponentAvailable && <Lifecycle />}
      </div>
    );
  }
}

export default App;
