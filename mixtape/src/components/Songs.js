import React from 'react'
import Cards from './Cards'

const Songs = (params) => {
 
    return (
        <>
        
            <Cards 
            key={params._id} 
            title={params.title} 
            artist={params.artist} 
            cover={params.cover} 
            album={params.album} 
            />
        </>
    )
}

export default Songs