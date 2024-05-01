import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate();

  const tool = useLoaderData();
  const handleSubmit = e => {
    e.preventDefault();
    const updatedTool = {
      name: e.target.name.value,
      img_link: e.target.img_link.value,
      link: e.target.link.value,
      category: e.target.category.value
    }
    axios.patch(`http://localhost:5000/update/${tool._id}`, updatedTool)
    .then(res => {
      console.log(res);
      navigate('/');
    });
  }
  console.log(tool);
  return (
    <form onSubmit={handleSubmit}>
      <h3>Name: </h3>
      <input type="text" name='name' defaultValue={tool.name} className='bg-gray-100'/>
      <h3>Img url: </h3>
      <input type="text" name='img_link' defaultValue={tool.img_link} className='bg-gray-100'/>
      <h3>Link: </h3>
      <input type="text" name='link' defaultValue={tool.link} className='bg-gray-100'/>
      <h3>Category: </h3>
      <input type="text" name='category' defaultValue={tool.category} className='bg-gray-100'/>
      <div className='space-x-4'>
        <input type="submit" value='Update' className='bg-white text-black p-4 cursor-pointer'/>
        <input type="button" value='Cancel' onClick={() => navigate('/')} className='bg-white text-black p-4 cursor-pointer'/>
      </div>
    </form>
  )
}

export default Update