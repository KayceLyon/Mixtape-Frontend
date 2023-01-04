import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = (params) => {
    return (
        <Card className="game-cards create-game-cards" key={params._id}>                    <Card.Title>{params.title}</Card.Title>
                    <Card.Text> 
                                Title: {params.title}<br/> 
                                Author: {params.author}<br/> 
                                Summary: {params.summary} 
                    </Card.Text>
        </Card>
    )
}
export default Cards;