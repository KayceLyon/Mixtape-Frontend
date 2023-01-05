import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import axios from 'axios'

const Cards = (params) => {

    const navigate = useNavigate()
    const [switchState, setSwitchState] = useState(true);
    const [cardFlip, setCardFlip] = useState(true)

    const handleSwitch = (event) => {
        event.preventDefault();
        setSwitchState(false)
        console.log(switchState)
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
        console.log(cardFlip)
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
        //   navigate('/api/playlists')

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

                </Card.Text>       
            </Card>
            </Button>

            </div>
            }

            <Button type='button' variant='success' className='summary-btn2'  onClick={handleSwitchBack}> Hide Playlist </Button>
            <Button type='button' variant='success' className='summary-btn2' onClick={handleDelete}> Delete Playlist </Button>


        </div> 

        }
</>
    )
}
export default Cards;