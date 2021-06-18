




import { createStore, combineReducers} from "redux";
import { LocationDataReducer } from "./Reducers/LocationDataReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";


const reducers = combineReducers({LocationDataReducer});



const logger = storeApi=>next=>action=>{
    let result=next(action);
    console.log('Store Log:', storeApi.getState());
    return result;
}


export const Store = createStore(reducers, applyMiddleware(thunk, logger));