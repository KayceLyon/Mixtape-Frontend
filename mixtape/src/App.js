import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'

import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'

const App = () => {

  
  let [playlists, setPlaylists] = useState([])
  let [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: ""
  })

  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredPlaylists, setFilteredPlaylists] = useState([])

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
