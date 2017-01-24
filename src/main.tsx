import config from './config';


import { password } from './utils/password';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import * as axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import 'jquery';
import '../bower_components/bootstrap/dist/js/bootstrap';
import './styles.js'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import * as createLogger from 'redux-logger';

import { syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { throttle } from 'lodash';
import { AppContainer } from "./components/App/AppContainer";
import { Reducer } from "./components/App/AppReducer";
import {loadState, saveState } from "./utils/reduxLocalStorage"



const logger = createLogger();
const routingMiddleware = routerMiddleware(hashHistory);
const middleware = applyMiddleware(
    promiseMiddleware(), 
    thunk,  
    logger, 
    routingMiddleware
)
const localState = loadState();
const store = createStore(
    Reducer,
    localState,
    middleware,
);

const syncHistory = syncHistoryWithStore(hashHistory, store)
store.subscribe(throttle(()=>{ // Throttle sync to local storage so we dont spam the store
    // saveState(store.getState());
    saveState({});
}, 1000)) 

ReactDOM.render(
    <Provider store={store} >     
        <AppContainer/>
    </Provider>,
    document.getElementById("main")
);





