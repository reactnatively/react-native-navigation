import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button
} from 'react-native';

class SignInScreen extends Component {

  signIn = async() => {
    await AsyncStorage.setItem('userToken','varun')
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Complete Sign In" onPress={this.signIn} />
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
