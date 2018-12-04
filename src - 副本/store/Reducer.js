import { CHANG_INPUT_VALUE, ADD_VALUSE, DELETE_ITEM, INT_DATA } from './actionTypes'

const defaultState = {
    inputValue: '',
    data: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANG_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue
        return newState
    }
    if (action.type === ADD_VALUSE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.data.splice(action.index, 1);
        return newState
    }

    if (action.type === INT_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.data = action.data;
        return newState
    }

    return state;
}