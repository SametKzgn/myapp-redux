import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import countryReducer from './reducers/countryReducer';

const rootReducer = combineReducers({
    country: countryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;