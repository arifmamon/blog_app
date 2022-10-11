import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, ScrollView, TouchableWithoutFeedback, Pressable, TouchableOpacity, LayoutAnimation, TouchableHighlight } from 'react-native';



const Separator = () => (
  <View style={styles.separator} />
);

const Login = () => (

  <SafeAreaView style={styles.container}>
  <ScrollView>   
    <TextInput placeholder="Name" style={styles.textinput} autoCapitalize='words'></TextInput>
    <Separator />
    <TextInput placeholder="Email.." style={styles.textinput} keyboardType='email-address' ></TextInput>
    <Separator />
    <TextInput placeholder="Password.." style={styles.textinput} secureTextEntry></TextInput>
    <Separator />
    <Button title="Submit"  onPress={() => Alert.alert("ads") } />
    <Separator />


    </ScrollView> 
    
  </SafeAreaView>
);

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

export default Login;