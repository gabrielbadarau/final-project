import {createStore,applyMiddleware,combineReducers} from 'redux';
import {listReducer} from './reducers/list';
import {sortersListReducer} from './reducers/sortersList';
import logger from 'redux-logger'

const rootReducer=combineReducers(
    {
        list:listReducer,
        sortersList:sortersListReducer
    }
)
const store=createStore(rootReducer,applyMiddleware(logger));

export default store;