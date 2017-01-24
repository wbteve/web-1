import * as Redux from 'redux'
import { connect } from "react-redux";
import { TopBarState, ActionGenerators } from "./common"
import { TopBar } from "./TopBar"
import { ComponentClass } from 'react';

const mapStateToProps:(state:TopBarState) => TopBarState 
= (state) => {
    return Object.assign({}, (state as any).TopBarReducer);
}

const mapDispatchToProps = (dispatch:any) => {
    return {
    }
}

export const TopBarContainer = connect(mapStateToProps, mapDispatchToProps)(TopBar as ComponentClass<any>)
export default TopBarContainer
