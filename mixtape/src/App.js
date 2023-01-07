import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import axios from 'axios'

import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'
import SongShow from './components/SongShow'
import Login from './components/Login'
import AddSong from './components/AddSong'
import SongIndex from './components/SongIndex'

const App = () => {

    let [song, setSong] = useState([{
    "title":"",
    "artist":"",
    "cover":"",
    "album": "",
    "playlist": {
      "id": "" ///find correct id thru params.formdata.id
    }
}])
  

  let [playlists, setPlaylists] = useState([])
  let [songs, setSongs] = useState([])
  let [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: ""
  })

  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredPlaylists, setFilteredPlaylists] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])


 

   const getPlaylists = () => { 
    axios
        .get('https://secret-beach-46849.herokuapp.com/api/playlists')
        .then(
            (response) => setPlaylists(response.data),
            (response) => console.log(response.data),
            (err) => console.error(err)
            )
        .catch((error) => console.error(error))
 }

 
  const [currentUser, setCurrentUser] = useState(false)


return (
  <>

  <Routes>
    
    <Route path = 'api/playlists' element={<Login setCurrentUser={setCurrentUser} />} >
    </Route>

    { currentUser === true ?  
  
 <>

<Route path = "/api/playlists" element={<Navigation getPlaylists={getPlaylists} searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists} setCurrentUser={setCurrentUser}/>}>
        <Route index element={<Index searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists} getPlaylists={getPlaylists}/>}  /> 
        <Route path="new" element={<Annotation formData={formData} setFormData={setFormData} setPlaylists={setPlaylists} getPlaylists={getPlaylists}/>} />
        <Route path="edit/:id" element={<EditAnnotation playlists={playlists} getPlaylists={getPlaylists}/>} />
        <Route path="songs/:id" element={<SongShow/>}/>

      </Route>
      <Route path="/" element={<Navigate to="/api/playlists" />}>
      </Route>
      <Route path = "/api/songs" element={<Navigation searchParams = {searchParams} setSearchParams = {setSearchParams} filteredSongs = {filteredSongs} setFilteredSongs = {setFilteredSongs} songs={songs} setSongs={setSongs}/>}>
        <Route index element={<SongIndex songs = {songs} setSongs = {setSongs} filteredSongs = {filteredSongs} setFilteredSongs = {setFilteredSongs} />} />
        <Route path="new" element={<AddSong />} />
    </Route>
    
  </>
:
null
}

</Routes>

</>

)

    
  


}

export default App;
