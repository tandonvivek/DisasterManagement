import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View,TextInput,Image, ScrollView, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RescueScreen extends Component<Props> {
  static navigationOptions = {
    title: 'SAHARA',
  };
  render() {
    return (
        <View style={styles.container}>
           <ScrollView>
                <Text style={styles.description}>Name:</Text>
                <TextInput 
                underlineColorAndroid={'transparent'}
                style={styles.searchInput}
                placeholder='Enter your name'/>    
                <Text style={styles.description}>Mobile:</Text>
                <TextInput 
                underlineColorAndroid={'transparent'}
                style={styles.searchInput}
                placeholder='Enter your mobile number'/>   
                <Text style={styles.description}>Comments:</Text>
                <TextInput 
                underlineColorAndroid={'transparent'}
                style={styles.comment}
                placeholder='Enter comments'/>   
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("RescueInfo")}>
                  <Image source={require("../assets/rescueMe.png")}/>
                </TouchableOpacity>
          </ScrollView >
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
   flex:1,
   padding: 5
    },
  container: {
    flex:1,
    backgroundColor: 'red',
    color: 'red',
   },
   button:{
     marginTop:250,
     marginLeft: 125,
    backgroundColor: 'white',
    borderColor: '#ff6600',
    borderWidth: 1,
    width:120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
     },
    comment:{
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: 'black',
      height:100,
      backgroundColor: 'white'
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
  },
  header:{

  },
  headerText:  {

  },
  scrollContainer:{

  },
  footer:{

  },
  textInput:{

  }
});
