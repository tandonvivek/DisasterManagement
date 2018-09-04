import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false
        };
    }
    onLogin() {
        const { username, password } = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }
    static navigationOptions = {
        title: 'SAHARA',
        headerTintColor: 'black',
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
                <Text>Login:</Text>
                <TextInput style={styles.loginInput}
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'} />
                <TextInput style={styles.loginInput}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true} />
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={(login) => this.setState({ login: true })}
                // onPress={this.onLogin.bind(this)}
                />
                <Text>Or</Text>
                <View style={styles.container}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonLeft} >
                            <Image source={require("../assets/fb.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require("../assets/gp.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require("../assets/tw.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 100
    },
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'red',
        color: 'red',
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
    button: {
        marginTop: 250,
        marginLeft: 105,
        backgroundColor: 'white',
        borderColor: '#ff6600',
        borderWidth: 1,
        width: 120,
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
    header: {

    },
    label: {
        width: 100,
        marginLeft: 0,
        color: 'black',
        fontSize: 18
    },
    scrollContainer: {

    },
    footer: {

    },
    textInput: {

    }
});
