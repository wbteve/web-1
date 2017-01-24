import * as Redux from 'redux'
import { connect } from "react-redux";
import { AppState, AppProps } from "./AppState"
import { App } from "./App"

const mapStateToProps:(state:AppState) => AppState
= (state) => {
    return Object.assign({}, (state as any).AppReducer);
//    return { compiler: state.compiler, framework: state.framework }
}

const mapDispatchToProps = (dispatch:any) => {
    return {}
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
