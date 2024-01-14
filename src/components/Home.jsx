import React, { useEffect } from 'react'
import Movies from './Movies'
import {api, api_key} from '../api'
import {useDispatch} from 'react-redux'
import { fetchmovie } from '../Redux/action/movies'

const Home = () => {

  const dispatch = useDispatch()

  const getmovie = async ()=>{
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`)
    dispatch(fetchmovie(res.data.results))
  }

  useEffect(()=>{
    getmovie();
  },[])

  return (
    <div>
        <Movies/>
    </div>
  )
}

export default Home