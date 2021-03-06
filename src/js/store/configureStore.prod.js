/**
 * Created by EdenLiang on 2016/3/7.
 */
'use strict';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

//等同于如下
//const enhancer = applyMiddleware(thunkMiddleware);
//
//export default function configureStore(initialState) {
//    return createStore(rootReducer, initialState, enhancer);
//}