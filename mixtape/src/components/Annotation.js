import React from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'



const Annotation = (params) => {

const navigate = useNavigate()

const handleChange = (event)=> {
    const {name, value, type, checked} = event.target
    params.setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked: value
    })) 
}
  
  const handleNewPlaylist = (event) => {
    event.preventDefault()
    axios.post(
      'https://secret-beach-46849.herokuapp.com/api/playlists',
      {
        title: params.formData.title,
        author: params.formData.author,
        summary: params.formData.summary
      })
      .then(()=>{
        params.getPlaylists()
    })
  navigate('/api/playlists')     
}
    return (
      <Container className='container'fluid>
        <form onSubmit={handleNewPlaylist}> 
      <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" value={params.formData.title} /><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleChange} placeholder="Author" value={params.formData.author}/><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleChange} placeholder="Summary" value={params.formData.summary}/><br/>
          <Button variant='light' type='submit' onClick={handleNewPlaylist}>Add Notes</Button>
          </form>
      </Container>
    )
}

export default Annotation;