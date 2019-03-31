import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware,reduxLogger)
);

sagaMiddleware.run(sagas);

export default store;