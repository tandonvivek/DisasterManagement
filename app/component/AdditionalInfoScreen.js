import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View,Alert, TextInput, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class AdditionalInfoScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static navigationOptions = {
        title: 'ADD GENERAL INFORMATION',
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
    addInfo(){
        Alert.alert("Addtional Info added");
        this.props.navigation.navigate("LoginHome_1")
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.description}>You can add photo, video or comments of the affected area near you. These details will be geo-tagged and used to provide real time updates to the public.</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonLeft} onPress={() => this.props.navigation.navigate("Disasters")}>
                            <Image source={require("../assets/camera.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRight} onPress={() => this.props.navigation.navigate("faq")}>
                            <Image source={require("../assets/videoCam.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Comments:</Text>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={styles.comment}
                            placeholder='Enter comments' />
                    </View>
                </ScrollView>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyl} onPress={() => this.addInfo()} >
                        <Text style={styles.btnText}>Add additional Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginHome_1")}>
                        <Image source={require("../assets/home.png")} />
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
    textFont1: {
        fontSize: 18,
        marginRight: 30,
        flexWrap: 'nowrap',
        color: 'white',
        width: 110,
        fontWeight: 'bold'
    },
    comment: {
        fontSize: 18,
        width: '68%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white',
        height: 100,
    },
    textStyl: {
        fontSize: 25,
        marginLeft: 10,
        color: 'white',
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    description: {
        margin: 5,
        fontSize: 18,
        marginLeft: 10,
        marginTop:10,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginLeft: 15,
        backgroundColor: '#6C99D3',
        borderWidth: 1,
        width: 270,
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
        flexDirection: 'row',
        margin: 10
    },
    buttonLeft: {
        marginLeft: 15,
        padding: 10
    },
    buttonRight: {
        marginLeft: 100,
        padding: 10
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
