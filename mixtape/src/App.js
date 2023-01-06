import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'

import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'
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

return (
  <>

  <Routes>
      <Route path = "/api/playlists" element={<Navigation searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}>
        <Route index element={<Index searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}  /> 
        <Route path="new" element={<Annotation formData={formData} setFormData={setFormData} setPlaylists={setPlaylists}/>} />
        <Route path="edit/:id" element={<EditAnnotation />} />
      </Route>
      <Route path="/" element={<Navigate to="/api/playlists" />}>
      </Route>
      <Route path = "/api/songs" element={<Navigation searchParams = {searchParams} setSearchParams = {setSearchParams} filteredSongs = {filteredSongs} setFilteredSongs = {setFilteredSongs} songs={songs} setSongs={setSongs}/>}>
        <Route index element={<SongIndex songs = {songs} setSongs = {setSongs} filteredSongs = {filteredSongs} setFilteredSongs = {setFilteredSongs} />} />
        <Route path="new" element={<AddSong formData = {formData} setFormData = {setFormData} />} />
    </Route>
    </Routes>
  </>
)
}

export default App;
