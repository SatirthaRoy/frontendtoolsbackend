import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { auth } from '../firebase.cofig';
import { signOut } from 'firebase/auth'


const PopUp = ({setshow,id}) => {
  console.log('id: ', id);
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/delete/${id}`)
    .then(res => {
      console.log(res);
      setshow(false);
    })
  }

  const handleCancel = () => {
    setshow(false);
  }

  return (
    <div className='fixed top-0 h-screen w-screen flex justify-center items-center'>
      <div className='flex justify-center items-center gap-10 flex-col bg-black h-1/2 w-1/2 border border-white'>
        <h1 className='text-4xl text-white text-center'>Confirm deletion?</h1>
        <div className='space-x-8'>
          <button className='text-white font-semibold bg-red-500 p-4' onClick={handleDelete}>Delete</button>
          <button className='text-white font-semibold border border-white p-4' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
    
  )
}

const Home = () => {

  const tools = useLoaderData();

  console.log(tools);

  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  if(tools.message === 'not authorized') {
    signOut(auth)
    .then(console.log('signed out'))
    // return <Navigate to='/register'></Navigate>
    return 'signed out'
  }

  return (
    <div className={`gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
      {tools && tools.map((t, i) => {
        return (
          <div key={i} className='border rounded-3xl p-9 space-y-5'>
            <h2>Name: {t.name}</h2>
            <h2>Image link: {t.img_link}</h2>
            <h2>Link: {t.link.length > 50 ? t.link.split('').slice(0,51).join('') : t.link}</h2>
            <div className='space-x-5'>
              <Link to={`/update/${t._id}`} className='p-4 border'><button>Update</button></Link>
              <button onClick={() => {
                setShow(true);
                setId(t._id);
                }} className='bg-red-600 text-white p-4'>Delete</button>
            </div>
          </div>
        )
      })}
      {show && <PopUp setshow={setShow} id={id}/>}
    </div>
  )
}

export default Home