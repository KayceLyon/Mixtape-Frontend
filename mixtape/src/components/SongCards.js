import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function SongCards(params) {

// const handleChange = (event)=> {
//     console.log(params);
//         const {name, value, type, checked} = event.target
//         params.setSongs(prevSongs => ({
//             ...prevSongs,
//             [name]: type === "checkbox" ? checked: value
//         })) 
//     }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={params.cover} />
      <Card.Body>
        <Card.Title>{params.title}</Card.Title>
        <Card.Text>{params.artist}</Card.Text>
        <Card.Text>{params.album}</Card.Text>
        <Form>
            {['checkbox'].map((type) => (
                <div key={`Add Song`} className="mb-3">
                <Form.Check 
                    type={type}
                    id={`Add Song`}
                    label={`Add Song`}
                />     
                </div>
            ))}
        </Form>
        <Form.Select aria-label="Default select example">
            <option>Playlist</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default SongCards;