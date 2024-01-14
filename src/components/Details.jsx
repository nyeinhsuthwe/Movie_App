import React, { useEffect } from 'react'
import { Card } from "flowbite-react";
import { Link, useParams } from 'react-router-dom';
import {api, api_key} from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { removemovies, selectmovies } from '../Redux/action/movies';
import { Spinner } from 'flowbite-react';

const Details = () => {
  const dispatch = useDispatch();
  const{movieid}= useParams();
  const movieDetails = async ()=>{
    const res = await api.get(`/movie/${movieid}?api_key=${api_key}`)
    dispatch(selectmovies(res.data))
  
  }
  useEffect(()=>{
   if(movieid){
    movieDetails();
   }
   return()=>dispatch(removemovies({}))
  },[])
  
  let movie = useSelector((state)=>state.movies.movie)

  return (
    <div className='container mx-auto'>
      <Link to= '/home'>
      <div>
        <span >
        <i className="fa-solid fa-circle-arrow-left me-2"></i>Back
        </span>
      </div>
      </Link>
      {JSON.stringify(movie) === '{}' ? (<div className='text-center'><h1><Spinner aria-label="Extra large spinner example" size="xl" /></h1></div>) : (<div>
      <Card
            className=""
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div>
                <span className='bg-black text-white rounded-lg p-2'><i className="fa-solid fa-star me-2 mb-3"></i>{movie.vote_average}</span>
                <span ><i className="fa-regular fa-calendar-days me-2 ms-3 text-red-500"></i>{movie.release_date}</span>
                <span><i className="fa-solid fa-users me-2 ms-3 text-red-500"></i>{movie.vote_count}</span>
            </div>
        
          </Card>
      </div>
      )}
    </div>
  )
}

export default Details