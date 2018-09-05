import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RescueScreen extends Component<Props> {
  static navigationOptions = {
    title: 'RESCUE ME',
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
        <ScrollView>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Name:</Text>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.resInput}
              placeholder='Enter your name' />
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Mobile:</Text>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.resInput}
              placeholder='Enter your mobile number' />
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Comments:</Text>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.comment}
              placeholder='Enter comments' />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("RescueInfo")}>
              <Image source={require("../assets/rescueMe.png")} />
            </TouchableOpacity>
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resInput: {
    fontSize: 18,
    width: '64%',
    height: '82%',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white'
  },
  buttonRow: {
    padding: 5,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
  },
  textFont: {
    fontSize: 24,
    marginLeft: 10,
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textFont1: {
    fontSize: 18,
    marginRight: 30,
    flexWrap: 'nowrap',
    color: 'white',
    width: 110,
    fontWeight: 'bold'
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    marginTop: 250,
    backgroundColor: 'white',
    borderColor: '#ff6600',
    borderWidth: 1,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    backgroundColor: 'white',
    borderColor: '#ff6600',
    borderWidth: 1,
    width: 120,
    borderRadius: 10,
    flexGrow: 1,
  },
  comment: {
    fontSize: 18,
    width: '64%',
    height: '82%',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
    height: 100,
  },
  description: {
    margin: 5,
    fontSize: 18,
    marginLeft: 10,
    color: 'black'
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
  }
});
