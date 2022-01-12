import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Card, Elevation } from "@blueprintjs/core";

function Tick() {
  ReactDOM.render(
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      style={{
        maxWidth: "50%",
        textAlign: "center",
        marginLeft: "10%",
        marginTop: "10%",
        float: "left",
        border: "round solid",
      }}
    >
      <h5>
        <a href="#">Timer walk every 30 sec</a>
      </h5>
      <h3>Timer: {new Date().toLocaleTimeString()}</h3>
    </Card>,
    document.getElementById("root")
  );
}
Tick();
setInterval(Tick, 30000);
//setInterval(Tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
