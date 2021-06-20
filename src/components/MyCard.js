import '../css/App.css';
import {Card} from 'react-bootstrap'

function MyCard(props){
  return(
    <Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>{props.AppName}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Under Construction- Coming Soon </Card.Subtitle>
<Card.Text>
  {props.Dis}
</Card.Text>
<Card.Link href="#">Link Comming soon</Card.Link>
</Card.Body>
</Card>
)
}

export default MyCard;
