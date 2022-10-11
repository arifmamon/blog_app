import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, ScrollView,TouchableHighlight} from "react-native";
import LottieView from "lottie-react-native";
import { Animated, Easing } from "react-native";
const Separator = () => (
  <View style={styles.separator} />
);

export default class Loottie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  runAnimation() {
    //this.animation.play();
    // Or set a specific startFrame and endFrame with:
this.animation.play();

    //this.setState({progress: new Animated.Value(0)});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView>   
          <TextInput placeholder="Name" style={styles.textinput} onChangeText={(text) => this.setState({text})}
        value={this.state.text} autoCapitalize='words'></TextInput>
          <Separator />
          <TextInput placeholder="Email.." style={styles.textinput} keyboardType='email-address' ></TextInput>
          <Separator />
          <TextInput placeholder="Password.." style={styles.textinput} secureTextEntry></TextInput>
          <Separator />
          <LottieView ref={animation => {this.animation = animation}}  source={require('./animations/1798-check-animation.json')}/> 
        <Button 
              onPress={() => this.runAnimation()} title="Submit">
                
              </Button>
          
            </ScrollView> 
      </SafeAreaView>



    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 14,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 6,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textinput:{
    fontSize: 18,
    borderColor: 'white',
    borderWidth:2,
    textAlignVertical: 'top',
  }
});