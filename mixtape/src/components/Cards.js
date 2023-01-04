import React from 'react'
import Card from 'react-bootstrap/Card'


const Cards = (params) => {
    return (
        <div className='tape'>
        <Card className="game-cards create-game-cards tape1" key={params._id}>                   
         <Card.Title>{params.title}</Card.Title>
         </Card>
         <Card className="tape2" key={params._id}> 
                  <Card.Text className="tapeText">
                   Author: {params.author}<br/> 
                  
                  </Card.Text>  
         </Card>  

          <div className="summary">
           Summary: {params.summary} 
          </div>

        </div>
    )
}
export default Cards;