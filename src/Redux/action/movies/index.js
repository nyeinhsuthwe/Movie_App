import { action } from "../actionTypes"

export const fetchmovie =(movies)=>{
    return{
        type : action.Fetch_Movies,
        payload : movies
    }
}

export const selectmovies = (movie)=>{
    return{
        type : action.Select_Movies,
        payload : movie
    }
}

export const removemovies = (movie)=>{
    return{
        type : action.Remove_Movies,
        payload : movie
    }
}
    
