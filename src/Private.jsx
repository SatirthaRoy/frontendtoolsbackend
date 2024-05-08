import { useContext } from "react"
import { contextData } from "./Provider"
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
  const {user, loading} = useContext(contextData);


  if(loading) {
    return <h1>Loading</h1>
  }

  if(user) {
    return children;
  } else {
    return <Navigate to='/register'></Navigate>
  }


}

export default Private