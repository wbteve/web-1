import {  TopBarState, ActionType } from "./common"
import { Fulfilled, Pending } from '../../utils/asyncActionGenerator' 
import { hashHistory } from 'react-router'

export const TopBarInitialState:TopBarState = {

}

export const TopBarReducer:(state:TopBarState, action:any) => TopBarState = 
function (state, action){
    if (state === undefined) {
        return Object.assign({}, TopBarInitialState, {})
    } else {
        return state;
    }
}

export default TopBarReducer