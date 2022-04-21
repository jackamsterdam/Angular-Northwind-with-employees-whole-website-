import { employeesReducer, EmployeesState } from './employees-state';
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./products-state";



//Creating reducers object from all our reducers:
const reducers = combineReducers({
    productsState: productsReducer,
    employeesState: employeesReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store