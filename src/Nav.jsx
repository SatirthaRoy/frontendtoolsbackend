import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center items-center gap-9'>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/add'>ADD TOOLS</NavLink>

    </div>
  )
}

export default Nav