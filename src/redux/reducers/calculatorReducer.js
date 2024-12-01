import { SET_INPUT, CALCULATE, CLEAR } from "../actions/types";

const initialState = {
  input: '',
  result: '',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: state.input + action.payload };
    case CALCULATE:
      try {
        const evaluated = eval(state.input);
        return { ...state, result: evaluated, input: '' };
      } catch {
        return { ...state, result: 'Error', input: '' };
      }
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default calculatorReducer;
