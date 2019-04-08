import React, { Component } from "react";

class Test extends Component {
  state = { collapse: false };

  toggle = e => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    return (
      <div>
        <i
          className="fas fa-arrow-down"
          style={{ padding: "5px" }}
          onClick={() => this.toggle()}
        />
        {this.state.collapse ? <div>{this.props.movie}</div> : null}
      </div>
    );
  }
}

export default Test;
