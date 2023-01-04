import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Annotation = (params) => {

    const handleTitleChange = (event)=> {
      console.log((event.target.value));
        params.setFormData({...params.formData, [event.target.name]: event.target.value}) 
    }

    const handleAuthorChange = (event)=> {
      console.log(event.target.value);
      params.setFormData({...params.formData, [event.target.name]: event.target.value}) 
    }
    const handleSummaryChange = (event)=> {
      params.setFormData({...params.formData, [event.target.name]: event.target.value}) 
    }



  const handleNewPlaylist = (event) => {
    event.preventDefault()
    event.target.reset()
    axios.post(
      'https://secret-beach-46849.herokuapp.com/api/playlists',
      {
        title: params.formData.title,
        author: params.formData.author,
        summary: params.formData.summary
      })
      .then(()=>{
        axios
        .get('https://secret-beach-46849.herokuapp.com/api/playlists')
        .then(
          (response) => params.setPlaylists(response.data),
          (err) => console.log(err),
        )
        .catch((error) => console.log(error))
      })
}




    return (
      <Container className='container'fluid>
        <form onSubmit={handleNewPlaylist}>
      <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleTitleChange} placeholder="Title" /><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleAuthorChange} placeholder="Author" /><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleSummaryChange} placeholder="Summary" /><br/>
          <Button variant='light' type='submit' >Add Notes</Button>
          </form>
      </Container>
    )
}

export default Annotation;