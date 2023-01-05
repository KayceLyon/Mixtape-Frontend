import React, {useState, useEffect} from 'react'
import {Route, Routes, Navigate, useSearchParams} from 'react-router-dom'
import axios from 'axios'
import Navigation from './components/Navigation'
import Index from './components/Index'
import Annotation from './components/Annotation'
import EditAnnotation from './components/EditAnnotation'
import Login from './components/Login'

const App = () => {

  
  let [playlists, setPlaylists] = useState([])
  let [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: ""
  })

  const [searchParams, setSearchParams] = useSearchParams({query: ""})
  const [filteredPlaylists, setFilteredPlaylists] = useState([])


  //Login Logout
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})




  // Login Create User functions
  const handleCreateUser = (userObj) => {
    axios.post('https://serene-dawn-88718.herokuapp.com/createaccount', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setErrorMessage(response.data)
        setToggleError(true)
      }
    })
  }

  const handleLogin = (userObj) => {
      console.log(userObj);
    axios.post('https://secret-beach-46849.herokuapp.com/api/playlists', userObj).then((response) => {
      if(response.data.username){
        console.log(response);
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        console.log(response);
        setToggleError(true)
        setErrorMessage(response.data)
      }
    })
  }
  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }

  const handleToggleForm = () => {
    setToggleError(false)
    if(toggleLogin === true) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }
  const handleToggleLogout = () => {
    if(toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }






return (
  <>

<div className='loggedOutDiv'> 
      
       
      {toggleLogout ?
     
      null
        :
        <div className='appFormDiv'>
          
          {toggleLogin ?
          <Login handleLogin={handleLogin} handleToggleForm={handleToggleForm} toggleError={toggleError} errorMessage={errorMessage}/>
          :
          <User handleCreateUser={handleCreateUser} handleToggleForm={handleToggleForm} toggleError={toggleError} errorMessage={errorMessage}/>
          }
          
        </div>
      }
    </div>

    {currentUser.username ?
        <div className='loggedInDiv'>

           <Routes>
              <Route path = "/api/playlists" element={<Navigation searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}>
                 <Route index element={<Index searchParams = {searchParams} setSearchParams = {setSearchParams} filteredPlaylists = {filteredPlaylists} setFilteredPlaylists = {setFilteredPlaylists} playlists={playlists} setPlaylists={setPlaylists}/>}  /> 
                  <Route path="new" element={<Annotation formData={formData} setFormData={setFormData} setPlaylists={setPlaylists}/>} />
                  <Route path="edit/:id" element={<EditAnnotation />} />

             </Route>
              <Route path="/" element={<Navigate to="/api/playlists" />} />
          </Routes>

        </div>

        :

        null}
  </>
)
}

export default App;
