
import { GET_TOMTOM_LOCATION } from "../Actions/LocationActions";


//holds the data array with the key value pair
const initialState = [];



export const LocationDataReducer = (state = initialState, action)=>{

    switch(action.type){
        case GET_TOMTOM_LOCATION:
            state=action.payload;
            return state;
    }

    return state;
}