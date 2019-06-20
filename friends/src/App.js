import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, Route } from "react-router-dom";

import rootReducer from "./reducers";
import { login } from "./actions/auth";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import PrivateRoute from "./components/Common/PrivateRoute";
import "./App.css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.getItem("token")) {
  store.dispatch(login(localStorage.getItem("token")));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Friends} />
      </Router>
    </Provider>
  );
}

export default App;
