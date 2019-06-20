import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import rootReducer from "./reducers";
import { login } from "./actions/auth";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import PrivateRoute from "./components/Common/PrivateRoute";
import Navbar from "./components/Common/Navbar";

import "./App.css";
import 'react-toastify/dist/ReactToastify.min.css' ;

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
        <Navbar />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Friends} />
        <ToastContainer autoClose= {3000} position="top-right" hideProgressBar={true} />

      </Router>
    </Provider>
  );
}

export default App;
