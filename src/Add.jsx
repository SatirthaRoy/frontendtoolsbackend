import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const tool = {
      name: form.tool_name.value,
      img_link: form.tool_image.value,
      link: form.tool_link.value,
      category: form.tool_category.value
    }
    console.log(tool);
    axios.post('http://localhost:5000/add', tool)
    .then(res => {
      navigate('/');
      console.log(res)})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='tool_name' placeholder='name'/> <br/>
        <input type="text" name='tool_image' placeholder='image link'/> <br/>
        <input type="text" name='tool_link' placeholder='tool link'/> <br/>
        <input type="text" name='tool_category' placeholder='tool category'/> <br/>
        <input type="submit" value='Add'/> <br/>
      </form>
    </div>
  )
}

export default Add