import { CHANG_INPUT_VALUE, ADD_VALUSE, DELETE_ITEM, INT_DATA } from './actionTypes.js'

export const getCHANG_INPUT_VALUE = (value) => ({
    type: CHANG_INPUT_VALUE,
    inputValue: value
})

export const getADD_VALUSE = () => ({
    type: ADD_VALUSE
})

export const getDELETE_ITEM = (index) => ({
    type: DELETE_ITEM,
    index: index
})

export const getINT_DATA = (data) => ({
    type: INT_DATA,
    data: data
})
