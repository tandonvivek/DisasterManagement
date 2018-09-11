import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RescueMoreInfoScreen extends Component<Props> {
  static navigationOptions = {
    title: 'RESCUE ME - MORE INFO',
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
      <View style={styles.container1}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.description}>No. of people:</Text>
            <Text style={styles.description}>Pin point your rescue location in the map</Text>
          </View>
          <View style={styles.container}>
            <ScrollView>
              <TextInput
                underlineColorAndroid={'transparent'}
                style={styles.searchInput}
                placeholder='Enter you current situation and details to your rescuer...' />
            </ScrollView >
          </View>
          <Button
            onPress={() => this.props.navigation.navigate("RescueInfo")}
            color='white'
            title='Submit' />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#8dc63f',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    flex: 1,
    padding: 30,
    marginTop: 10
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
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
    color: '#656565'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 100,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
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
