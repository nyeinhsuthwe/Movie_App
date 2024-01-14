import React from 'react'
import { Card } from "flowbite-react";
import {Link} from 'react-router-dom'

const Moviecard = ({movie}) => {
  return (
    <div>
        <Link to={`/movies/details/${movie.id}`}>
       <div className="max-w-sm">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0,150)}
            </p>
            <div>
                <span className='bg-black text-white rounded-lg p-2'><i className="fa-solid fa-star me-2 mb-3"></i>{movie.vote_average}</span>
                <span ><i className="fa-regular fa-calendar-days me-2 ms-3 text-red-500"></i>{movie.release_date}</span>
            </div>
        
          </Card>
        </div>
       </Link>

    </div>
  )
}

export default Moviecard