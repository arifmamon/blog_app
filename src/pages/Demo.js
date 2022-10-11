import React,{Component,useState, Text,Image} from 'react'
import { useParams } from 'react-router-dom';
import Index from './MultiPage/index.js';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import eoer from './eoer.jpg';

class View extends Component {

  

  render() {
    let cardid = localStorage.getItem("selectedCard");
    console.log(this.props);
    return (
      <div style={{flexWrap: 'wrap',marginLeft: '9.7px'}}>
      <Card style={{ width: '15rem', marginBottom: '5px', marginTop: '5px' }}>
      <Card.Img variant="top" src={cardid} style={{ height: '330px',width: '239px'}} />
      <Card.Body>
          <Card.Title style={{}}>{this.props.match.params.title}</Card.Title>
          <Card.Text>
          Some quick example text to build on the card ts title 
          </Card.Text>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">Last updated {Math.floor(Math.random() * 60)} mins ago</small>
      </Card.Footer>
      </Card>
  </div>
    );
  }
}


export default View;
