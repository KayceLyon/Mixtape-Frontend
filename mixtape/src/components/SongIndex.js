import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css'

import Songs from './Songs';

const SongIndex = (params) => {
    const axiosRequest = [ 
        'https://secret-beach-46849.herokuapp.com/api/songs'
    ]

  
    const getSongs = () => { 
        Promise.all(axiosRequest.map((axiosRequest)=> axios.get(axiosRequest))).then(
        axios.spread((...allData) => {
          params.setSongs(allData[0].data);
          params.setFilteredSongs((allData[0].data));
        })
        )
       }

   console.log(params.songs)

  useEffect(()=>{
    getSongs()
    }, []);

    return (
        <Container className='container' fluid>
            <main id="Index">
              <h1>Songs</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                     {params.songs.map((song)=>{ 
                       return(
                            <Col key={song._id}>
                            <Songs 
                        title ={song.title} 
                        artist={song.artist} 
                        cover={song.cover} 
                        album={song.album}
                        />       
                        </Col>                 
                              )
                            })}
                </Row>
            </main>         
        </Container>
      ) 
    }
    
    export default SongIndex
    