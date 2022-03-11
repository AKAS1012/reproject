import {createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { signupreducer } from "./reducer/signupreducer";
import thunk from "redux-thunk";

const instialState = {}

const  rootreducer = combineReducers({
    signupreducer:signupreducer
})

const  Middleware = [thunk]

const store = createStore(
    rootreducer,
    instialState,
    composeWithDevTools(applyMiddleware(...Middleware))
    );


export default store;