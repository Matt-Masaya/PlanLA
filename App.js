import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Create from './components/Create';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Log in</Text>
        <Text>Welcome to PlanLA</Text>
        <Create />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00838F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
