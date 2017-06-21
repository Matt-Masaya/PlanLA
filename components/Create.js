import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class Create extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text 
          style={{fontSize: 27}}>
          What's your name?
        </Text>
        <View style={{margin:7}} />
        <Text>FIRST NAME</Text>
        <TextInput />
        <Text>LAST NAME</Text>
        <TextInput />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00838F',
  },
});
