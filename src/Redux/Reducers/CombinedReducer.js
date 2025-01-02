import { combineReducers } from "redux";
import MetalDataReducer from "../Reducers/MetalDataReducer";

const combinedReducer = combineReducers({
    MetalDataReducer,
})

export default combinedReducer;