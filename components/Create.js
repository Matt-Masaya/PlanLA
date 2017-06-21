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
      <ScrollView style={{padding: 20}}>
        <View style={{margin:7}} />
        <Button 
          onPress={this.props.onLoginPress}
          title="Create Account"
        />
      </ScrollView>
    )
  }
}
