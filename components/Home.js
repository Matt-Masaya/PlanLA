import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Create from './Create';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Log in"
          onPress={() => navigate('Login')}
        />
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