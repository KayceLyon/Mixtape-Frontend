import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'


function SongShow(params) {
  const parameters = useParams()
  const [song, setSong] = useState({
    id: "",
    title: "",
    artist: "",
    cover: "",
    album: "",
    playlist: {
      id: "",
      title: "",
      author: "",
      summary: "",
    }
  })
      
  const getSong = () => {
    axios
    .get(`https://secret-beach-46849.herokuapp.com/api/songs/${parameters.id}`)
    .then(
        (response) => setSong(response.data),
        (response) => console.log(response.data.title + 'responseeeeee')
    )
    console.log(parameters.id);
}

useEffect(()=>{
  getSong()
  }, []);
  return (
    <div className="song-show">
        
        {song.title} by {song.artist}<br/>
        <img className="song-img" src={song.cover} width="300"/>
        <small>from the album {song.album}</small>
    </div>
  );
}

export default SongShow;