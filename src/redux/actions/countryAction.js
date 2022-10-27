import { actionTypes } from "./types";
import axios from "axios";

export const countryItem = () => (dispatch) =>{
    axios
    .get(`https://restcountries.com/v3.1/all`)
    .then((tasks)=>{
        dispatch({
                type:actionTypes.COUNTR_ITEM,
                payload:tasks.data
        });
    })
}