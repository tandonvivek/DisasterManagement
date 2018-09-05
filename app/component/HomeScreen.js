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
    //const {navigate} = this.props.navigation;
    const { state } = this.props.navigation;
    var name = state.params ? state.params.name : "<undefined>";
    var login = name.login ? name.login : false;
    return (


      <View style={styles.container}>
        <ScrollView >
          {name.login == true ?
            <View style={styles.authBtn}>
              <Text>{name.loginRegMsg}</Text>
            </View>
            : null}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonLeft} onPress={() => this.props.navigation.navigate("Rescue")}>
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

          {login == false ?
            <View style={styles.authBtn}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                <Image source={require("../assets/signIn.png")} />
              </TouchableOpacity>
              <Text>   OR   </Text>
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
    backgroundColor: 'red',
    flexDirection: 'column',
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
    marginLeft: 40
  },
  authBtn: {
    padding: 10,
    flexDirection: 'row',
    margin: 20,
    marginLeft: 50
  },
  buttonRow: {
    padding: 10,
    flexDirection: 'row',
    margin: 20
  },
  buttonLeft: {
    marginLeft: 0
  },
  buttonRight: {
    marginLeft: 130
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
