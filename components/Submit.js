import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }



  render() {
    return (
      <LottieView source={require('./animations/1798-check-animation.json')} 
      autoPlay 
      progress= {this.state.progress}/>
    );
  }
}