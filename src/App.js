import React, { useState } from "react";
import "./App.css";
import HTMLInput from "./component/HTMLInput";
const ReactMarkdown = require("react-markdown");

const App = () => {
  const [input, setInput] = useState(" ");
  const disallowed = ["link"];
  return (
    <div className="App">
      <header className="App-header">
        <HTMLInput setInput={setInput} />
        <ReactMarkdown
          source={input}
          disallowedTypes={disallowed}
          className="markdown"
        />
      </header>
    </div>
  );
};

export default App;
