import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import {history} from "routes";

const sagaMiddleware = createSagaMiddleware();
const enhancers: any[] = [];
const middleware = [
  // logger,
  routerMiddleware(history),
  sagaMiddleware
];
const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  composeEnhancer(applyMiddleware(...middleware), ...enhancers)
);

// We run the root sagas automatically
sagaMiddleware.run(rootSaga);

export default store;