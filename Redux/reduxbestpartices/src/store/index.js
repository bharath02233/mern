import {combineReducers,createStore} from "redux";
import CounterReducer from "./CounterReducer";
import TodoReduer from "./TodoReducer";
var reducer=combineReducers({counterR:CounterReducer,todor:TodoReduer});
var store=new createStore(reducer);

export default store;