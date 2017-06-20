import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Where' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: '#BDBDBD', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export default SearchBar;
