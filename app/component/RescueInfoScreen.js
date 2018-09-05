import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RescueInfoScreen extends Component<Props> {
  static navigationOptions = {
    title: 'RESCUE ME - INFO',
    headerTintColor: 'white',
    headerstyle: {
      backgroundColor: 'rgb(47, 54, 61)',
      shadowOpacity: 0
    },
    headertitleStyle: {
      color: '#fefefe',
      fontFamily: 'MuseoSansRounded-300',
      fontWeight: '300',
      justifyContent: 'space-between',
      textAlign: 'center'
    },
    tintColor: '#fefefe'
  };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.container}>
          <Text style={styles.description}>Your Rescue Request is forwarded to below near by Camps. You can call camps or find safe route to reach any camp.
              Select camp to view details or map icon to see route to camp.
          </Text>
        </View>

        <View style={styles.container}>
          <ScrollView>

          </ScrollView>
        </View>
        <View style={styles.container1}>
          <Text style={styles.description}>It’s better to provide more details about your situation. Do you want to do it now?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'red',
    color: 'red',
  },
  container2:{
    flex: 1,
    padding: 5,
  },
  container1: {
    flex: 1,
    padding: 5,
    borderColor: 'yellow',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'red',
    borderColor: '#ff6600',
    borderWidth: 1,
    borderRadius: 10,
    width: '75%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 1,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0 },
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    margin: 5,
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white'
  },
  header: {

  },
  headerText: {

  },
  scrollContainer: {

  },
  footer: {

  },
  textInput: {

  }
});
