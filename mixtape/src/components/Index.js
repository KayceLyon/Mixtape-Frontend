import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Playlists from './Playlists'

const Index = (params) => {
  const axiosRequest = [ 
    'https://secret-beach-46849.herokuapp.com/api/playlists'
]
 
 const getPlaylists = () => { 
    axios
        .get(axiosRequest)
        .then(
            (response) => params.setPlaylists(response.data),
            (err) => console.error(err)
            )
        .catch((error) => console.error(error))
 }

  useEffect(()=>{
  getPlaylists()
  }, []);

  return (
    <Container className='container' fluid>
        <main id="Index">
          <h1>Playlists</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                 {params.playlists.map((playlist)=>{ 
                   return(
                        <Col key={playlist._id}>
                             <Playlists 
                            title ={playlist.title} 
                            author={playlist.author} 
                            summary={playlist.summary} 
                            />       
                            </Col>                  
                           
                          )
                        })}
            </Row>
        </main>         
    </Container>
  ) 
}

export default Index
