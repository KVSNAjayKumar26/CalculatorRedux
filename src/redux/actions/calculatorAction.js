import { SET_INPUT, CALCULATE, CLEAR } from "./types";

// Action Creators
export const setInput = (value) => ({
    type: SET_INPUT,
    payload: value,
});

export const calculate = () => ({
    type: CALCULATE,
});

export const clear = () => ({
    type: CLEAR,
});