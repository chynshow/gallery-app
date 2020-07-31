import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import photosReducer from './photos/photosReducer';

export default createStore(photosReducer, applyMiddleware(thunkMiddleware));
