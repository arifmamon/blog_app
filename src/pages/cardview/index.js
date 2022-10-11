import React,{} from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class CardView extends Component {
    render() {
    return (
        <div style={{flexWrap: 'wrap',marginLeft: '9.7px'}}>
            <Card style={{ width: '15rem', marginBottom: '5px', marginTop: '5px' }}>
            <Card.Img variant="top" src={this.props.img} style={{ height: '330px',width: '239px'}} />
            <Card.Body>
                <Card.Title style={{}}>{this.props.name}</Card.Title>
                <Card.Text>
                    {this.props.desc} 
                </Card.Text>
                <Button variant="primary" >Read</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Created on {this.props.createdAt} mins ago</small>
            </Card.Footer>
            </Card>
        </div>
    )
}
}
export default CardView;
