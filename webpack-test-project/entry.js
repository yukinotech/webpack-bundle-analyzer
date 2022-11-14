import React from "react";
import ReactDOM from "react-dom";
import { say } from "./sub-module";

const a = say;

const b = a + "";

const App = () => {
  return <div>111</div>;
};

ReactDOM.render(<App />);
