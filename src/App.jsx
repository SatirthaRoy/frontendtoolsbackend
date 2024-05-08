import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { useContext } from 'react'
import { contextData } from './Provider'
import Register from './Register'

function App() {
  const {user, loading} = useContext(contextData)
  return (
    <>
      <Nav/>
      {/* {(!user && !loading) && <Register/>} */}
      <Outlet/>
    </>
  )
}

export default App
