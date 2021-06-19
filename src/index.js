import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Context/DataProvider";
import { AuthenticationProvider } from "./Context/AuthenticationProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


