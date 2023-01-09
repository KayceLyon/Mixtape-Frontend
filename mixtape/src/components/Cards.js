import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import axios from 'axios'
import SongShow from './SongShow'

const Cards = (params) => {

    const navigate = useNavigate()
    const [switchState, setSwitchState] = useState(true);
    const [cardFlip, setCardFlip] = useState(true)
    const [songShow, setSongShow] = useState(false)
    const [songs, setSongs] = useState([])



      
    
    const getSongs = () => {
        axios
        .get(`https://secret-beach-46849.herokuapp.com/api/playlists/${params.id}`)
        .then(
            (response) => setSongs(response.data.songs)
        )
    }

    const handleSwitch = (event) => {
        event.preventDefault();
        setSwitchState(false)
        console.log(switchState)
        console.log(params);

      }

      const handleSwitchBack = (event) => {
        event.preventDefault();
        setSwitchState(true)
        setCardFlip(true)
        console.log(switchState)
      }

    const toggleCardFlip = (event) => {
        event.preventDefault();
        if(cardFlip === true) {
        setCardFlip(false)
        } else {
        setCardFlip(true)
        }
        getSongs()
        console.log(cardFlip)
      }

    const handleEdit= () => {
        navigate(`/api/playlists/edit/${params.id}`)
    }

    const handleDelete = () => {
        console.log(params);
        console.log(params.id);
        console.log(params.title);
        axios
            .delete(`https://secret-beach-46849.herokuapp.com/api/playlists/${params.id}`)
            .then(()=>{
                params.getPlaylists()
            })
    }

    return (

<>
        { switchState === true ? 

        <div className='tape'>
            <Card className="game-cards create-game-cards tape1" key={params._id}>                   
                <Card.Title>{params.title}</Card.Title>
            </Card>
                <Card className="tape2" key={params._id}> 
                  <Card.Text className="tapeText">
                   Author: {params.author}<br/> 
                  
                  </Card.Text>  
            </Card>  


            <Button type='button' variant='success' className='summary-btn'  onClick={handleSwitch}> Show Playlist </Button>

          

        </div>

        :


        <div className='summary'>

            { cardFlip === true ?

            <div>

            <Button type='button' className='cardFlip-btn' onClick={toggleCardFlip}>
            <Card className='summaryCard'>
                <Card.Text className="insertText">
                 Summary: {params.summary} 

                </Card.Text>       

            </Card>
            </Button>

            </div>


            :

            <div>

            <Button type='button' className='cardFlip-btn' onClick={toggleCardFlip}>
            <Card className='summaryCard2'>
                <Card.Text className="insertText">
                 {params.title}
                    {/* map over songs to show info for each */}
                 {songs.map((song)=> {
                    return(
                        <li key={song.id}>
                            {/* <p onClick={()=>setSongShow(true)}> {song.title} by {song.artist}</p>
                            {songShow === false ? 
                                null
                            :
                                <>
                                    <SongShow song={song}/>
                                </>
                            
                              } */}
                              
                            {/* <p> {song.title} by {song.artist}</p> */}
                            <p onClick={()=>navigate(`/api/playlists/songs/${song.id}`)}>{song.title} by {song.artist}</p>

                            {/* navigate(`/api/playlists/edit/${params.id}`) */}



                            
                        </li>
                    )
                 })}

                </Card.Text>       
            </Card>
            </Button>

            </div>
            }

            <Button type='button' variant='success' className='summary-btn2'  onClick={handleSwitchBack}> Hide Playlist </Button>
            <Button type='button' variant='success' className='edit-btn' onClick={handleEdit}> Edit Playlist </Button>
            <Button type='button' variant='success' className='delete-btn' onClick={handleDelete}> Delete Playlist </Button>
            


        </div> 

        }
</>
    )
}
export default Cards;