import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


import Login from './Login'
import Logout from './Logout'
import Search from './Search'

const Navigation = (params) => {
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
             <Nav.Link>Add Songs</Nav.Link>
            <Nav.Link>
                Edit Playlists</Nav.Link>
                </Nav>
               {/* <Search /> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
>>>>>>> 8e991eb5eab17328d4127769bcb9cb5ca459a81e
       </>
  );
}

export default Navigation