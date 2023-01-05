import React, { useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const AddSong = (params) => {
  let [songNumber, setSongNumber] = useState(0)


    const handleSongChange = (event) => {
      params.setSong({...params.song, [event.target.name]: event.target.value})
    }

    const handleNewSong = (event) => {
      event.preventDefault()
      event.target.reset()
    }

//   const handleNewPlaylist = (event) => {
//     event.preventDefault()
//     event.target.reset()
//     axios.post(
//       'https://secret-beach-46849.herokuapp.com/api/playlists',
//       {
//         title: params.formData.title,
//         author: params.formData.author,
//         summary: params.formData.summary
//       })


//       .then(()=>{
//         axios
//         .get('https://secret-beach-46849.herokuapp.com/api/playlists')
//         .then(
//           (response) => params.setPlaylists(response.data),
//           (err) => console.log(err),
//         )
//         .catch((error) => console.log(error))
//       })
// }




    return (
      <Container className='container'fluid>
         <form>
          {/* <h1>{params.formData.title} </h1>
            <small>by {params.formData.author}</small><br/> */}
          {songNumber === 0 ? 
            <>
            
            is empty! Add your first Song!<br/>
            Remember... the vibe is : {params.formData.summary} <br/><br/>
            </>
          :
            null
          }
          <label>Song {songNumber + 1}</label> <br/>
          <label> Song title</label>
          <input className="form-control origin" type='text' name="title" onChange={handleSongChange} placeholder="title"/>
          <label> Song artist</label>
          <input className="form-control origin" type='text' name="artist" onChange={handleSongChange} placeholder="artist"/>
          <label> Song cover</label><br/>
          <small>(paste image address here)</small>
          <input className="form-control origin" type='text' name="cover" onChange={handleSongChange} placeholder="cover"/>
          <label> Song album</label>
          <input className="form-control origin" type='text' name="album" onChange={handleSongChange} placeholder="album"/>
          <Button variant='light' type='submit' >Add Song</Button>
          </form>
        
      
      </Container>
    )
}

export default AddSong;