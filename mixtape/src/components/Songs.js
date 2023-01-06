import React from 'react'
import SongCards from './SongCards'

const Songs = (params) => {
 
    return (
        <>
            <SongCards 
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