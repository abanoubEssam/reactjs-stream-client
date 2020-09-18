import authReducer from "./auth.reducer";
import { reducer as formReducer } from 'redux-form'
const { combineReducers } = require("redux");

export default combineReducers({
    auth: authReducer,
    form: formReducer 
})