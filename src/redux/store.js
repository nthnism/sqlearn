import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from './rootReducer';

const initialState = {};

const middleWare = [thunk];

const middlewareEnhancer = applyMiddleware(...middleWare);

export const store = createStore(rootReducer, initialState, middlewareEnhancer);
