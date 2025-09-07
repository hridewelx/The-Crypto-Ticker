import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import globalStore from "../Component/Store";
import CreateCryptoCoin from "../Component/CreateCryptoCoin";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Crypto Tracker</h1>
        <p className="app-subtitle">Real-time cryptocurrency market data</p>
      </header>
      <Provider store={globalStore}>
        <CreateCryptoCoin></CreateCryptoCoin>
      </Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
