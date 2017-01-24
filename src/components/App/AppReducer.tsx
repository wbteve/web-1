import { AppState } from './AppState'
import { combineReducers } from 'redux'
import TopBarReducer from '../TopBar/TopBarReducer';
import {routerReducer} from 'react-router-redux';

const defaultState:AppState = {
  compiler: "TypeScript + Babel",
  framework: "React Redux",
  dev: true,
  user: null
}

const AppReducer:(state:AppState, action:any) => AppState 
= function(state, action){
  if (state === undefined) {
    return defaultState
  }
  switch (action.type){
      default:
          return Object.assign({}, state);
  }
}

export const Reducer = combineReducers({
  AppReducer,
  TopBarReducer,
  routing: routerReducer
})