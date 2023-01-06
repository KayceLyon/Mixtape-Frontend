import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const EditAnnotation = (params) => {

  const navigate = useNavigate()
  let [playlist, setPlaylist] = useState({})
  const parameters = useParams()
 

    const handleChange = (event)=> {
      console.log(params);
        const {name, value, type, checked} = event.target
        setPlaylist(prevPlaylist => ({
            ...prevPlaylist,
            [name]: type === "checkbox" ? checked: value
        })) 
    }
    const getPlaylist = () => { 
      axios
          .get(`https://secret-beach-46849.herokuapp.com/api/playlists/${parameters.id}`)
          .then(
              (response) => setPlaylist(response.data),
              (response) => console.log(response.data),
              (err) => console.error(err)
              )
          .catch((error) => console.error(error))
   }
  
  const handleEditPlaylist = (event) => {
    axios.put(
      `https://secret-beach-46849.herokuapp.com/api/playlists/${parameters.id}`,
      {
        title: playlist.title,
        author: playlist.author,
        summary: playlist.summary,
      }).then(()=>{
        params.getPlaylists()
      })
      navigate('/api/playlists')     

}

useEffect(()=>{
  getPlaylist()
  }, []);

    return (
      <Container className='container'fluid>
        <form>
      <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleChange} placeholder="Title" defaultValue={playlist.title}/><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleChange} placeholder="Author" defaultValue={playlist.author}/><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleChange} placeholder="Summary" defaultValue={playlist.summary}/><br/>
          <Button variant='light' type='submit' onClick={handleEditPlaylist}>Add Notes</Button>
          </form>


          
          
      </Container>
    )
}

export default EditAnnotation;