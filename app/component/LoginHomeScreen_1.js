import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginHomeScreen_1 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
      loginRegMsg: 'You have signed in successfully',
    };
    
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  static navigationOptions = {
    title: 'SAHARA',
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
        <ScrollView >
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonLeft} onPress={() => this.props.navigation.navigate("ProvideHlp")}>
              <Image source={require("../assets/provideHelp.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("getHelp")}>
              <Image source={require("../assets/getHelp.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonLeft} onPress={() => this.props.navigation.navigate("Disasters")}>
              <Image source={require("../assets/info.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight} onPress={() => this.props.navigation.navigate("faq")}>
              <Image source={require("../assets/faq.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.panicBtn}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Rescue")}>
              <Image source={require("../assets/sos.png")} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#8dc63f',
    flexDirection: 'column',
  },
  description: {
    margin: 5,
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    padding: 5,
  },
  panicBtn: {
    padding: 10,
    margin: 10,
    marginTop: 50,
    marginLeft: 35,
    //  alignItems: 'center',
  },
  authBtn: {
    padding: 20,
    marginLeft: 30,
    flexDirection: 'row',
    margin: 20,
    marginLeft: 50
  },
  buttonRow: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 28
  },
  buttonLeft: {
    marginLeft: 0
  },
  buttonRight: {
    marginLeft: 100
  },
  searchInput: {
    height: 45,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
  }
});
