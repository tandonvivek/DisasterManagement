import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, Alert, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


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
        console.log("**props**" + JSON.stringify(props));
        this.state = {
            username: '',
            password: '',
            login: false,
            res: '',
            responseJson: '',
            authToken: ''
        };
    }
    onLogin() {
        var details = {
            'username': this.state.username,
            'password': this.state.password,
            'grant_type': 'password'
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log("formBody" + formBody);
        fetch('https://webapp-sahara.azurewebsites.net/oauth/token', {
            method: 'POST',
            headers: {
                'grant_type': 'password',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ='
            },
            body: formBody,
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("**Response**" + JSON.stringify(responseJson));
                this.props.navigation.navigate("LoginHome");
                this.setState({
                    authToken: responseJson.access_token,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    static navigationOptions = {
        title: 'LOGIN',
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
                    <View style={styles.loginContainer}>
                        <Text style={styles.textFont1}>Username</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.username}
                            onChangeText={(username) => this.setState({ username })}
                            placeholder={'Username'} />
                        <Text style={styles.textFont1}>Password</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            placeholder={'Password'}
                            secureTextEntry={true} />
                        <TouchableOpacity style={styles.loginBtn} >
                            <Button
                                title={'Login'}
                                onPress={() => this.onLogin()} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.or}>Or</Text>
                    <View style={styles.container}>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.otherImg}>
                                <Image source={require("../assets/fb.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.otherImg}>
                                <Image source={require("../assets/gp.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.otherImg}>
                                <Image source={require("../assets/tw.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textFont: {
        fontSize: 24,
        marginLeft: 10,
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    loginContainer: {
        paddingTop: 20,
        margin: 10
    },
    loginBtn: {
        padding: 10
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
        padding: 15
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
    label: {
        width: 100,
        marginLeft: 0,
        color: 'black',
        fontSize: 18
    }
});
