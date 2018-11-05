import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CaptureScreen extends Component {

  //
  static navigationOptions = {
    tabBarLabel: 'Capture',
    tabBarIcon: ({ tintColor }) => {
      return (
        <Icon
          name="md-menu"
          size={24}
          color={tintColor}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Capture Options</Text>
      </View>
    );
  }
}

export default CaptureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
