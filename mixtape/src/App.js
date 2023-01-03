import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'

import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'

const App = () => {
return (
  <>
  <h1>test</h1>
  <Routes>
      <Route path = "/api/playlists" element={<Navigation />}>
        <Route index element={<Index />} /> 
        <Route path="new" element={<Annotation />} />
        <Route path="edit/:id" element={<EditAnnotation />} />
      </Route>
      <Route path="/" element={<Navigate to="/api/playlists" />} />
    </Routes>
  </>
)
}

export default App;
