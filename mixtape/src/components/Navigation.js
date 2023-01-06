import React, {useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


import Login from './Login'
import Logout from './Logout'
import Search from './Search'

const Navigation = (params) => {
    
  useEffect(()=>{
    params.getPlaylists()
    }, []);
  return (
      <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
                   <Navbar.Brand className="navbarhome" as={Link} to={"/api/playlists"}>Mixtape</Navbar.Brand>
            <Navbar.Toggle className="hamhamham" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title as={Link} to={"/api/playlists"} className={'offcanvas-link'} id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mixtape
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe 3">
                {/* <Nav.Link><Login /></Nav.Link>
                <Nav.Link><Logout /></Nav.Link> */}
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
             <Nav.Link as={Link} to={"/api/playlists/new"} >Add Playlist</Nav.Link>
             <Nav.Link as={Link} to={"/api/songs/new"} >Add Songs</Nav.Link>
                </Nav>
               <Search playlists = {params.playlists} 
            setPlaylists = {params.setPlaylists} 
            searchParams = {params.searchParams} 
            setSearchParams = {params.setSearchParams} 
            filteredPlaylists = {params.filteredPlaylists} 
            setFilteredPlaylists = {params.setFilteredPlaylists}
            songs = {params.songs}
            setSongs = {params.setSongs}
            filteredSongs = {params.filteredSongs}
            setFilteredSongs = {params.setFilteredSongs}/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />

       </>
  );
}

export default Navigation