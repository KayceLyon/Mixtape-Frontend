import React from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Annotation = (params) => {

    const handleChange = (event)=> {
        const {name, value, type, checked} = event.target
        params.setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked: value
        })) 
    }
  
  const handleNewPlaylist = () => {
    axios.post(
      'https://secret-beach-46849.herokuapp.com/admin/playlists_api/playlist/',
      {
        title: params.formData.title,
        author: params.formData.author,
        summary: params.formData.summary,
      }).then(()=>{
        axios
        .get('https://secret-beach-46849.herokuapp.com/admin/playlists_api/playlist/')
        .then((response)=>{
          params.setPlaylists(response.data)
        })
      })
}


    return (
      <Container className='container'fluid>
        <form>
      <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" value={params.formData.title}/><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleChange} placeholder="Author" value={params.formData.author}/><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleChange} placeholder="Summary" value={params.formData.summary}/><br/>
          <Button variant='light' type='submit' onClick={handleNewPlaylist}>Add Notes</Button>
          </form>
      </Container>
    )
}

export default Annotation;