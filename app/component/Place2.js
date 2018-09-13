import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZGFyc2hpbml2cyIsImEiOiJjam0wN3I4czMyOW1yM3BwNGo3eHAzcW1vIn0.xH_7D6sJHOyR64R3jtnTcw');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Place2 extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static navigationOptions = {
        title: 'COORG',
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
    renderAnnotations () {
        return (
          <Mapbox.PointAnnotation
            key='pointAnnotation'
            id='pointAnnotation'
            coordinate={[9.932, 76.259]}>
    
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!' />
          </Mapbox.PointAnnotation>
        )
      }
    
      render() {
        return (
          <View style={styles.container2}>
            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={8}
                centerCoordinate={[9.930, 76.257]}
                style={styles.container2}
                >
                {this.renderAnnotations()}
            </Mapbox.MapView>
          </View>
        );
      }}
    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <ScrollView>
    //                 <Text style={styles.textFont1}>Search:</Text>
    //                 <View style={styles.buttonRow}>
    //                     <TextInput style={styles.loginInput}
    //                         value={this.state.username}
    //                         onChangeText={(username) => this.setState({ username })}
    //                         placeholder={'Username'} />
    //                     <TouchableOpacity  onPress={null} >
    //                         <Image source={require("../assets/search.png")} />
    //                     </TouchableOpacity>
    //                 </View>

    //             </ScrollView>
    //         </View>
    //     );
  //  }
//}

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 18,
    },
    container2: {
        flex: 1,
      },
      annotationContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
      },
      annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'orange',
        transform: [{ scale: 0.6 }],
      },

    smallBtn: {
        marginLeft: 5,
        backgroundColor: '#80ff00',
        borderColor: '#ff6600',
        borderWidth: 1,
        width: 95,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginInputSmall: {
        fontSize: 18,
        width: '80%',
        height: '82%',
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white'
    },
    textFont: {
        fontSize: 24,
        marginLeft: 10,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    or: {
        fontSize: 20,
        marginLeft: 10,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 70
    },
    textFont1: {
        fontSize: 18,
        color: 'white',
        width: 100,
        fontWeight: 'bold'
    },
    otherImg: {
        padding: 30,
        paddingLeft: 0,
        marginLeft: 15
    },
    loginInput: {
        margin: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
        width:300
    },
    loginContainer: {
        borderColor: '#ff6600',
        borderWidth: 1,
        width: 400,
        borderRadius: 10,
        margin: 20,
        padding: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#8dc63f',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
        padding: 5,
    },
    loginButton: {
        marginTop: 250,
        marginLeft: 105,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnsContainer: {
        margin: 20,
    },
    buttonStyl: {
        padding: 20,
        margin: 20,
        marginLeft: 30,
        backgroundColor: 'orange',
        borderColor: '#ff6600',
        borderWidth: 1,
        width: 300,
        height: 37,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    panicBtn: {
        padding: 10,
        margin: 10,
        marginLeft: 60
    },
    buttonRow: {
        padding: 10,
        flexDirection: 'row',
        margin: 20
    },
    buttonLeft: {
        marginLeft: 5
    },
    buttonRight: {
        marginLeft: 130
    },
    description: {
        marginBottom: 10,
        fontSize: 18,
        marginLeft: 100,
        color: 'black'
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
    },
    label: {
        width: 100,
        marginLeft: 0,
        color: 'black',
        fontSize: 18
    }
});
