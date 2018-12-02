import { CHANG_INPUT_VALUE, ADD_VALUSE, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '123',
    data: ['Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',]
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
    return state;
}