import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class DisastersScreen extends Component<Props> {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // }
    static navigationOptions = {
        title: 'PROBLEMS NEAR YOU',
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
                    <View>
                        <TouchableOpacity style={styles.buttonStyl} onPress={() => this.props.navigation.navigate("Kerala")} >
                            <Text style={styles.btnText}>Kerala Flood</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyl} onPress={() => this.props.navigation.navigate("Coorg")} >
                            <Text style={styles.btnText}>Coorg Landslides</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyl} onPress={() => this.props.navigation.navigate("AddtionalInfo")} >
                        <Text style={styles.btnText}>Add additional Information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 18,

    },
    textFont: {
        fontSize: 24,
        marginLeft: 10,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textStyl: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold'
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
        backgroundColor: 'white'
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
        backgroundColor: '#6C99D3',
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
        marginBottom: 5
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
