
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./reducers";


const middlewares = [reduxThunk];

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
