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
      </Card.Body>
    </Card>
  );
}

export default SongCards;