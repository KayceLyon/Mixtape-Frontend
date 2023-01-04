import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'

const Cards = (params) => {


    const [switchState, setSwitchState] = useState(true);

    const handleSwitch = (event) => {
        event.preventDefault();
        setSwitchState(false)
        console.log(switchState)
      }

      const handleSwitchBack = (event) => {
        event.preventDefault();
        setSwitchState(true)
        console.log(switchState)
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

            <Card className='summaryCard'>
                <Card.Text className="insertText">
                 Summary: {params.summary} 

                </Card.Text>
           
        
        
            </Card>

        <Button type='button' variant='success' className='summary-btn2'  onClick={handleSwitchBack}> Hide Playlist </Button>

        </div> 

        }
</>
    )
}
export default Cards;