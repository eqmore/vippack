import {createStore, applyMiddleware} from 'redux';
// import Logger from 'redux-logger';
import reactThunk from 'redux-thunk';
import reactPromise from 'redux-promise';
import reducer from './reducer/index'
const store = createStore(reducer,applyMiddleware(reactThunk,reactPromise));//
window._store=store;
export default store;