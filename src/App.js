import React, { Component } from "react";
import Movies from "./components/Movies";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{ marginBottom: "20px", width: "30%" }}
        />
        <Movies />
      </>
    );
  }
}

export default App;
