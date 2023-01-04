import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = (params) => {

    let query = params.searchParams.get("query").split(' ').join('-').toLowerCase()

    const filteredPlaylists = (unfilteredPlaylists, query) => {
        return (unfilteredPlaylists.filter(playlists => playlists.title.toLowerCase().includes(query.toLowerCase()))).map(filteredPlaylists => (filteredPlaylists))
    }

    const filterPlaylistsDB = (e) =>{
        axios
        .get('https://secret-beach-46849.herokuapp.com/api/playlists')
        .then((response)=>{
          params.setFilteredPlaylists(filteredPlaylists(response.data, params.searchParams.get("query")))
          
        })
      }

    return (
        <>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search by Title"
                className="me-2"
                aria-label="Search"
                onChange={(event) => params.setSearchParams({query: event.target.value})}
                onClick={(event) => params.setFilteredPlaylists(params.playlists)}
                />
                <Button onClick={filterPlaylistsDB} variant="outline-dark">Search</Button>
          </Form>
        </>
    )
}

export default Search