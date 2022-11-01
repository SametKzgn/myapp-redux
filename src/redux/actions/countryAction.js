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

export const getNeighbour = name => (dispatch) => {
    axios
        .get(`https://restcountries.com/v3.1/${name}`)
        .then((country ) => {
            dispatch({
                type: actionTypes.NEIGHBOUR_ITEM,
                payload: country.data
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


export const getPopular = name => dispatch => {
    axios
        .get(`https://www.triposo.com/api/20221011/location.json?countrycode=${name}&account=1YEE0N8Q&token=42v0jy3rvixjdgfji4ljuv9ajb6qwf4z&count=6`)
        .then(country => {
           dispatch({
                 type: actionTypes.POPULAR_CITY,
                 payload: country.data.results
             })
        })
         .catch(err => console.log(err)) //hata olursa konsola yazdır
 }
 //popüler şehirler için bu apiyi bizim çekiceğimiz apiye göre değiştir yeni action ve reducer olustur burda topla


