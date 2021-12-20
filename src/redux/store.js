import {createStore,applyMiddleware} from 'redux';
import {listReducer} from './reducers/list';
import logger from 'redux-logger'

const store=createStore(listReducer,applyMiddleware(logger));

export default store;