import React from "react";

class Dog extends React.Component {
  constructor() {
    super();
    this.state = { size: 20 };
  }

  doIt = () => {
    this.setState({ size: 120 });
  };

  render() {
    return (
      <>
        <h2
          style={{
            color: "red",
          }}
        >
          Im BIG dog
        </h2>
        <button
          style={{
            color: "green",
            fontSize: this.state.size + "px",
          }}
          onClick={() => this.doIt()}
        >
          Press this button, please
        </button>
      </>
    );
  }
}

export default Dog;
