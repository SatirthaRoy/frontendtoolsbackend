import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase.cofig";

export const contextData = createContext();

const Provider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(loggedUser) => {
      if(loggedUser) {
        setUser(loggedUser);
        console.log('user logged in');
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    })

    return () => unsubscribe();

  })


  const data = {
    user,
    loading
  }

  return (
    <contextData.Provider value={data}>{children}</contextData.Provider>
  )
}

export default Provider