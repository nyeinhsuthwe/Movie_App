import { action } from "../../action/actionTypes"


const initialState = {
    movies : [],
    movie: {}
}

export const movieReducer = (state = initialState, {type,payload})=>{
 switch(type){
    case action.Fetch_Movies :
        return {...initialState, movies: payload};

    case action.Select_Movies:
        return {...initialState, movie:payload};

    default : return state
 }
}