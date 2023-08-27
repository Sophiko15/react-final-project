import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  // {/* </React.StrictMode> */}
);