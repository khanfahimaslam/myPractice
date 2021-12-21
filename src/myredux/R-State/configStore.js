import {createStore, combineReducers} from "redux";
import {groupReducer} from '../R-Reducer/groupReducer'

export const configStore=()=>{
    const myStore=createStore(combineReducers({groupReducer}),
    window.__REDUX_DEVTOOL_EXTENSION__ &&  window.REDUX_DEVTOOL_EXTENSION__())
    return myStore;
}



// import {createStore, combineReducers,} from "redux";
// import {groupReducer} from '../R-Reducer/groupReducer';


// export const configStore= ()=>{
//     const myStore=createStore(combineReducers({groupReducer}),
//     window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__);
//     return myStore;
// }