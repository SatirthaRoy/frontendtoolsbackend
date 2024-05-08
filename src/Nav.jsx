import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contextData } from './Provider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.cofig'

const Nav = () => {
  const {user} = useContext(contextData)

  return (
    <div className='flex justify-between items-center gap-9 w-11/12 mx-auto'>
      <div>
        <h1>FRONTEND <br /> TOOLS <br /> SERVER</h1>
      </div>
      <div className='space-x-8'>
        
        {user &&<><NavLink to='/'>HOME</NavLink>
        <NavLink to='/add'>ADD TOOLS</NavLink></>}
        
      </div>
      <div>
      { user && <button onClick={() => {
        signOut(auth)
        .then(() => console.log('signed out'))
      }}>LogOut</button>}
      </div>
      
    </div>
  )
}

export default Nav