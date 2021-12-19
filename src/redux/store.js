import {createStore} from 'redux';
import {listReducer} from './reducers/list';

const store=createStore(listReducer);

export default store;