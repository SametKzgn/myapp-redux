
import { actionTypes } from "../actions/types";

const initialState ={
    countryTasks:[],
    countryTask: [],
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.COUNTR_ITEM:
            return{
                ...state,
                countryTasks: action.payload
            }
        default:
            return state;
    }
}