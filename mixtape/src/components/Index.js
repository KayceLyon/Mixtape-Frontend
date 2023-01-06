import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Playlists from './Playlists'

const Index = (params) => {
  const axiosRequest = [ 
    'https://secret-beach-46849.herokuapp.com/api/playlists'
]

const getPlaylists = () => { 
    Promise.all(axiosRequest.map((axiosRequest)=> axios.get(axiosRequest))).then(
    axios.spread((...allData) => {
      params.setPlaylists(allData[0].data);
      params.setFilteredPlaylists((allData[0].data));
    })
    )
   }
 
  useEffect(()=>{
  getPlaylists()
  }, []);

  return (
    <Container className='container' fluid>
        <main id="Index">
          <h1>Playlists</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                 {params.filteredPlaylists.map((playlist)=>{ 
                   return(
                        <Col key={playlist._id}>
                             <Playlists 
                            playlist={params.filteredPlaylists} 
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
