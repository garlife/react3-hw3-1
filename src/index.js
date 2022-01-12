import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Tick() {
  ReactDOM.render(
    (
      <>
      <h3>Hello, world!</h3>
      <h1>Time now(30s): {new Date().toLocaleTimeString()}</h1>
    </>
    ),
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
