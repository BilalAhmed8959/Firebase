import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
<div className='flex justify-center items-center gap-10 p-4 font-bold text-xl'>
    <p>
        <Link to={"/"}>Home</Link>
       
    </p>
    <p>    
          <Link to={"loging"}>Loging</Link>
    </p>
    <p>
    <Link to={"singup"}>Singup</Link>
    </p>
</div>
    
    </>
  )
}

export default Navbar