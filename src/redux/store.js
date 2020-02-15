import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import rootReducter from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducter,applyMiddleware(...middlewares));

export default store;