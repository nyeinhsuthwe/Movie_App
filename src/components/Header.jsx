import React, { useRef } from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react';
import { api, api_key } from '../api';
import { useDispatch } from 'react-redux';
import { fetchmovie } from '../Redux/action/movies';

const Header = () => {

  const moviename = useRef('')
  const dispatch =useDispatch();
 const mv = async ()=>{
  if(moviename.current.value !== ''){
  const res = await api.get(`/search/movie?query=${moviename.current.value}&api_key=${api_key}`)
  dispatch(fetchmovie(res.data.results));
  }
  else{
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`)
  dispatch(fetchmovie(res.data.results));
  }
 }

  return (
    <div>
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My Movie Channel</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <TextInput className=' rounded-lg ' placeholder='Search...' ref={moviename} />
        <Button className='ms-2' onClick={()=>mv()} >Search</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header