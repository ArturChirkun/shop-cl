import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from "redux-logger";

import rootReducer from './root-redux';

<<<<<<< HEAD
const middlewares = [];
=======
const middlewares = []
>>>>>>> 04970231b419750de92442cc3af9771b48dbc994

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export  { store, persistor };
