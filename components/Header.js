import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput, ScrollView, ImageBackground } from 'react-native';
import Animation from 'lottie-react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Header = () => (
  <SafeAreaView style={styles.container}>
  <ScrollView>   
    <View style={styles.container}>
      <Text style={styles.title}>
          Welcome      
        </Text>
      
    </View>
    </ScrollView> 
 
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 40,
    color: 'white',
  },

});

export default Header;