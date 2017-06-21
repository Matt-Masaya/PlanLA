import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Login from './components/Login';
import Create from './components/Create';

const App = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Create: { screen: Create },
});

export default App;
