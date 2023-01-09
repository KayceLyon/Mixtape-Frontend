import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


    


function SongCards(params) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={params.cover} />
      <Card.Body>
        <Card.Title>{params.title}</Card.Title>
        <Card.Text>{params.artist}</Card.Text>
        <Card.Text>{params.album}</Card.Text>
        <Button variant="primary"></Button>
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </Card.Body>
    </Card>
  );
}

export default SongCards;