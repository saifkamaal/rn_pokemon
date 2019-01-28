import React, { Component } from "react";
import { Provider } from "react-redux";
import reducer from "./app/reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import RootStack from "./app/routers/appRouter";

const logger = createLogger();
const middleware = [thunk, logger];
let store = createStore(reducer, applyMiddleware(...middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
