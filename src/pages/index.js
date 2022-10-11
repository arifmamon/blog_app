import React, { Component } from 'react';

import CardView from './cardview';
import './home.css';

import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

    // componentDidMount() {
    //   axios.get('https://my-json-server.typicode.com/arifmamon/json/posts')
    //     .then(responce => {
    //       this.setState({posts: responce.data});
    //       console.log(responce);
    //     });
    // }

    async componentDidMount() {
      const fetched = await axios.get('/post');
      console.log(fetched);
      this.setState({ posts: fetched.data });
    }

    render() {
      let posts = this.state.posts.map(data => {
        return <CardView name={data.name} img={data.img} desc={data.desc} key={data._id} createdAt={data.createdAt}/>
      })
      return(
        <div className="container">
                <div className="row">
                {posts}
                </div>
        </div>

      );
    }
  }

  export default Home;
