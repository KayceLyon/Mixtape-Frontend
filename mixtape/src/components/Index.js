import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Playlists from './Playlists'

const Index = (params) => {


  return (
    <Container className='container' fluid>
        <main id="Index">
          <h1>Playlists</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                 {params.playlists.map((playlist)=>{ 
                   return(
                        <Col key={playlist.id}>
                             <Playlists 
                            playlist={params.filteredPlaylists} 
                            title ={playlist.title} 
                            author={playlist.author} 
                            summary={playlist.summary}
                            id={playlist.id} 
                            getPlaylists={params.getPlaylists}
                            setPlaylists={params.setPlaylists}
                            
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
