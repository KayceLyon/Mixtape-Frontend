import React, {useEffect, useState} from 'react'
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
    event.target.reset()
    axios.post(
      'https://secret-beach-46849.herokuapp.com/api/playlists',
      {
        title: params.formData.title,
        author: params.formData.author,
        summary: params.formData.summary

      })
      
  navigate('/api/playlists')     
}

  const submitAll = (event) => {
    handleNewPlaylist(event)
    navigate('/api/playlists')
  }

    return (
      <Container className='container'fluid>
        {/* {showSongForm === false ? */}
        <form onSubmit={submitAll} >
          <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" value = {params.title} /><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleChange} placeholder="Author" value = {params.author}/><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleChange} placeholder="Summary" value = {params.summary}/><br/>
          
          <Button variant='light' type='submit' >
          Add Notes</Button>
        </form>
        {/* // :
        //  <form>
        //   <h1>{params.formData.title} </h1>
        //     <small>by {params.formData.author}</small><br/>
        //   {songNumber === 0 ?  */}
        {/* //     <>
            
        //     is empty! Add your first Song!<br/>
        //     Remember... the vibe is : {params.formData.summary} <br/><br/>
        //     </>
        //   :
        //     null
        //   }
        //   <label>Song {songNumber + 1}</label> <br/>
        //   <label> Song title</label>
        //   <input className="form-control origin" type='text' name="title" onChange={handleSongChange} placeholder="title"/>
        //   <label> Song artist</label>
        //   <input className="form-control origin" type='text' name="artist" onChange={handleSongChange} placeholder="artist"/>
        //   <label> Song cover</label><br/>
        //   <small>(paste image address here)</small>
        //   <input className="form-control origin" type='text' name="cover" onChange={handleSongChange} placeholder="cover"/>
        //   <label> Song album</label>
        //   <input className="form-control origin" type='text' name="album" onChange={handleSongChange} placeholder="album"/>
        //   <Button variant='light' type='submit' >Add Song</Button>
        //   </form>
        // } */}
      
      </Container>
    )
}

export default Annotation;