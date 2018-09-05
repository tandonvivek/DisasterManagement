import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, Picker, ScrollView, Image, TouchableOpacity, Container } from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class RegisterScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pswd: '',
            repswd: '',
            login: false,
            mobile: '',
            otp: '',
            gender: '',
            dob: ''
        };
    }
    onLogin() {
        const { username, password } = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }
    static navigationOptions = {
        title: 'REGISTER',
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
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Name:</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                            placeholder={'Name'} />
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Mobile:</Text>
                        <TextInput style={styles.loginInputSmall}
                            value={this.state.mobile}
                            onChangeText={(mobile) => this.setState({ mobile })}
                            placeholder={'Mobile'} />
                        <TouchableOpacity style={styles.smallBtn} >
                            <Text style={styles.btnText}>Send OTP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>OTP:</Text>
                        <TextInput style={styles.loginInputSmall}
                            value={this.state.otp}
                            onChangeText={(otp) => this.setState({ otp })}
                            placeholder={'Enter OTP here..'} />
                        <TouchableOpacity style={styles.smallBtn} >
                            <Text style={styles.btnText}>Verify OTP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Gender:</Text>
                        <Picker
                            style={styles.pickerStyl}
                            selectedValue={this.state.gender} //onValueChange={null}
                        >
                            <Picker.Item label="Select Gender..." value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Password:</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.pwsd}
                            onChangeText={(pswd) => this.setState({ pswd })}
                            placeholder={'Password'}
                            secureTextEntry={true} />
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>Re-enter Password:</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.repswd}
                            onChangeText={(repswd) => this.setState({ repswd })}
                            placeholder={'Re-Enter Password'}
                            secureTextEntry={true} />
                    </View>
                    <View style={styles.buttonRow}>
                        <Text style={styles.textFont1}>DOB:</Text>
                        <TextInput style={styles.loginInput}
                            value={this.state.dob}
                            onChangeText={(dob) => this.setState({ dob })}
                            placeholder={'Date of Birth'} />
                    </View>
                    <TouchableOpacity style={styles.input} >
                        <Button
                            title={'Register'}
                            onPress={() => this.props.navigation.navigate("HomeScreen")}
                        // onPress={this.onLogin.bind(this)}
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    btnText: {
        color: 'white',
        fontSize: 18
    },
    pickerStyl: {
        width: '72%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#48BBEC',
        borderRadius: 15,
        color: 'black',
        backgroundColor: 'white'
    },
    loginInputSmall: {
        fontSize: 18,
        width: '50%',
        height: '82%',
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white'
    },
    loginInput: {
        fontSize: 18,
        width: '72%',
        height: '82%',
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: 'black',
        backgroundColor: 'white'
    },
    textFont1: {
        fontSize: 18,
        color: 'white',
        width: 100,
        fontWeight: 'bold'
    },
    buttonRow: {
        padding: 5,
        flexDirection: 'row',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
    },
    textFont: {
        fontSize: 24,
        marginLeft: 10,
        color: 'white',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    otherImg: {
        padding: 30,
        paddingLeft: 0,
        marginLeft: 15
    },
    container: {
        flex: 1,
        paddingTop:15,
        backgroundColor: 'red',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    panicBtn: {
        padding: 10,
        margin: 10,
        marginLeft: 60
    },
    buttonLeft: {
        marginLeft: 5
    },
    buttonRight: {
        marginLeft: 130
    }
});
