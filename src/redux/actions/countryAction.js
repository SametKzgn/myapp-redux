import {actionTypes} from "./types";
import axios from "axios";

export const countryItem = () => (dispatch) => {
    axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((tasks) => {
            dispatch({
                type: actionTypes.COUNTR_ITEM,
                payload: tasks.data
            });
        })
        .catch(err => console.log(err)) //hata olursa konsola yazdır
}

export const getCountry = name => dispatch => {
    axios
        .get(`https://restcountries.com/v3.1/alpha/${name}`)
        .then(country => {
            dispatch({
                type: actionTypes.GET_COUNTRY,
                payload: country.data[0]
            })
        })
        .catch(err => console.log(err)) //hata olursa konsola yazdır
}


// export const getCountry = name => dispatch => {
//     axios
//         .get(`https://restcountries.com/v3.1/alpha/${name}`)
//         .then(country => {
//             dispatch({
//                 type: actionTypes.GET_COUNTRY,
//                 payload: country.data[0]
//             })
//         })
//         .catch(err => console.log(err)) //hata olursa konsola yazdır
// }
// popüler şehirler için bu apiyi bizim çekiceğimiz apiye göre değiştir yeni action ve reducer olustur burda topla
