import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";

// Combine all reducers

const rootReducer = combineReducers({
    calculator: calculatorReducer,
});

export default rootReducer;