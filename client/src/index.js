import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.variable.min.css";
import { createStore } from "redux"; //createStore is a function that allow us to create a store
import { Provider } from "react-redux"; //Provider allow us to access the store from any component
import { composeWithDevTools } from "redux-devtools-extension"; //composeWithDevTools is used to enable the redux devtools
import rootReducer from "./reducers";

//store is a object that contain all the state of the application
const store = createStore(rootReducer, composeWithDevTools()); // store is a function that takes a reducer and returns a store.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
); //we provide the store to our application using the Provider component.So that we can access the store from any component.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
