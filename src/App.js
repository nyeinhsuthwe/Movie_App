import React from 'react'
import "./App.css"
import "./index.css"
import Home from './components/Home'
import Header from './components/Header'
import {Routes, Route} from "react-router"
import NotFound from './components/NotFound'
import Details from './components/Details'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Home/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/movies/details/:movieid' element={<Details/>} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App