import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

class SettingsScreen extends Component {

  signOut = async() => {
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});