import logo from "./logo.svg";
import "./App.css";
import { Button, Icon } from "@blueprintjs/core";
import React, { Component } from "react";
import { render } from "@testing-library/react";

// class Button extends React.Component(){};

class App extends React.Component {
  render() {
    return (
      <>
        <h3>Hello, world!</h3>
        <h1>Time now(30s): {new Date().toLocaleTimeString()}</h1>
      </>
    );
  }
}

export default App;
