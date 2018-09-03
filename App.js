import React, {Component} from 'react';
import RouterComponent from './app/component/RouterComponent';
import {StyleSheet} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'App',
  };
  render() {
    return (
        <RouterComponent/>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});




