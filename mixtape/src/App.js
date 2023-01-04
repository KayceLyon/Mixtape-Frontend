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

return (
  <>
  <h1>Mixtape</h1>
  <Routes>
      <Route path = "/api/playlists" element={<Navigation />}>
        <Route index element={<Index playlists = {playlists} setPlaylists = {setPlaylists} />} />
        <Route path="new" element={<Annotation formData = {formData} setFormData = {setFormData} playlists = {playlists} />} />
        <Route path="edit/:id" element={<EditAnnotation playlists = {playlists} setPlaylists = {setPlaylists} />} />
      </Route>
      <Route path="/" element={<Navigate to="/api/playlists" />} />
    </Routes>
  </>
)
}

export default App;
