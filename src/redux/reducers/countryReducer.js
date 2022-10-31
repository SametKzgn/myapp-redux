import {actionTypes} from "../actions/types";

const initialState = {
    countryTasks: [],
    countryTask: {},
}
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTR_ITEM:
            return {
                ...state,
                countryTasks: action.payload
            }
        case actionTypes.GET_COUNTRY:
            return {
                ...state,
                countryTask: action.payload
            }
        case actionTypes.CLEAR: //stateleri sıfırlamak için
            return {
                ...state,
                countryTasks: [],
                countryTask: {}
            }
        default:
            return state;
    }
}
