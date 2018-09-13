import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      login: false,
      loginRegMsg: ''
    };
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  static navigationOptions = {
    headerTitle: (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          source={require('../assets/sahara_small.png')} />
      </View>
    ),
  };
  render() {
    //const {navigate} = this.props.navigation;
    const { state } = this.props.navigation;
    var name = state.params ? state.params.name : "<undefined>";
    var login = name.login ? name.login : false;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ScrollView >
          {name.login == true ?
            <View style={styles.authBtn}>
              <Text>{name.loginRegMsg}</Text>
            </View>
            : null}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonLeft} onPress={() => this.props.navigation.navigate("ProvideHlp")}>
              <Image source={require("../assets/provideHelp.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("getHelp")}>
              <Image source={require("../assets/getHelp.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={{
              marginLeft:10
            }}
              onPress={() => this.props.navigation.navigate("Disasters")}>
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

          {login == false ?
            <View style={styles.authBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                <Image source={require("../assets/login.png")} />
              </TouchableOpacity>
              <Text style={{
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
              }}>   OR   </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
                <Image source={require("../assets/register.png")} />
              </TouchableOpacity>
            </View>
            : null}
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
    marginTop: 50
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
