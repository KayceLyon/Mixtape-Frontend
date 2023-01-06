import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import axios from 'axios'

import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'

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
      <Route path = "/api/playlists" element={<Navigation searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}>
        <Route index element={<Index searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}  /> 
        <Route path="new" element={<Annotation formData={formData} setFormData={setFormData} setPlaylists={setPlaylists}/>} />
        <Route path="edit/:id" element={<EditAnnotation />} />

      </Route>
      <Route path="/" element={<Navigate to="/api/playlists" />} />
    </Routes>
  </>
)

    
  


}

export default App;
