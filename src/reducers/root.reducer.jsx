import authReducer from "./auth.reducer";
import { reducer as formReducer } from 'redux-form'
import streamReducer from "./stream.reducer";
const { combineReducers } = require("redux");


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})