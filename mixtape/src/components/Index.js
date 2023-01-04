import React, {useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Playlists from './Playlists'

const Index = (params) => {
  const axiosRequest = [ 
    'https://secret-beach-46849.herokuapp.com/admin/playlists_api/playlist/'
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
                {/* {params.playlists.map((playlist)=>{  */}
                    {/* return( */}
                        <Col key={params.playlists._id}>
                             <Playlists 
                            title ={params.playlists.title} 
                            author={params.playlists.author} 
                            summary={params.playlists.summary} 
                            />       
                            </Col>                  
                          {/* </Col>  )})}  */}
            </Row>
        </main>         
    </Container>
  ) 
}

export default Index
