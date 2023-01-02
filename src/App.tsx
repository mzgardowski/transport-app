import React from "react";
import "./App.css";
import Logo from "./logo.svg";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo as unknown as string} className="App-logo" alt="logo" />
        {/* <Logo /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
