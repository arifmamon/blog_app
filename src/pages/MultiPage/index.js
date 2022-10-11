import React, { Component } from 'react'
import CardView from '../cardview';
import View from '../Demo'

class Index extends Component {
    state = {
        posts: []
    
    }
    render() {
    return this.state.post != null ? (
        
            <CardView src={this.state.posts.coverpics} title={this.state.post.title}/>
            
       
    ) : null;
    }
}
export default Index;
