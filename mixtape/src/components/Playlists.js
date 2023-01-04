import React from 'react'
import Cards from './Cards'

const Playlists = (params) => {
 
    return (
        <>
            <Cards 
            key={params._id} 
            title={params.title} 
            author={params.author} 
            summary={params.summary} 
            />
        </>
    )
}

export default Playlists