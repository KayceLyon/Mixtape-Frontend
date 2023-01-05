import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Annotation = (params) => {
  let [showSongForm, setShowSongForm] = useState(false)
  let [songNumber, setSongNumber] = useState(0)
  let [song, setSong] = useState([{
    "title":"",
    "artist":"",
    "cover":"",
    "album": "",
    "playlist": {
      "id": "" ///find correct id thru params.formdata.id
    }
}])

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

    const handleSongChange = (event) => {
      setSong({...song, [event.target.name]: event.target.value})
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
        {showSongForm === false ?
        <form onSubmit={handleNewPlaylist}>
          <h1 >Notes</h1>
          <input className="form-control origin" type='text' name='title' onChange={handleTitleChange} placeholder="Title" /><br/>
          <input className="form-control origin" type='text' name='author' onChange={handleAuthorChange} placeholder="Author" /><br/>
          <input className="form-control origin" type='text' name='summary' onChange={handleSummaryChange} placeholder="Summary" /><br/>
          
          <Button variant='light' type='submit' onClick={()=>setShowSongForm(true)} >Add Notes</Button>
        </form>
        :
         <form>
          <h1>{params.formData.title} </h1>
            <small>by {params.formData.author}</small><br/>
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

          </form>
        }
      
      </Container>
    )
}

export default Annotation;