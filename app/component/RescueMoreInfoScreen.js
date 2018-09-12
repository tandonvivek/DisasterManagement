import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, Image, View, Picker, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class RescueMoreInfoScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      noOfPpl: 'no',
      othersNeedHlp: 'no',
      electrAvl: 'no',
      foodAvl: 'no',
      medHelp: 'no',
      anySeniorCtz: 'no',
      anyKids: 'no'
    };
  }
  static navigationOptions = {
    title: 'RESCUE ME - MORE INFO',
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
            <Text style={styles.textFont1}>No. of People with you</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.noOfPpl} onValueChange={(noOfPpl) => this.setState({ noOfPpl })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Any others nearby needs help?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.othersNeedHlp} onValueChange={(othersNeedHlp) => this.setState({ othersNeedHlp })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Electricity Available?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.electrAvl} onValueChange={(electrAvl) => this.setState({ electrAvl })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Food Available?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.foodAvl} onValueChange={(foodAvl) => this.setState({ foodAvl })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Any medical emergency?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.medHelp} onValueChange={(medHelp) => this.setState({ medHelp })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Are Senior Citizen?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.anySeniorCtz} onValueChange={(anySeniorCtz) => this.setState({ anySeniorCtz })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Any Kids?</Text>
            <Picker
              style={styles.pickerStyl}
              selectedValue={this.state.anyKids} onValueChange={(anyKids) => this.setState({ anyKids })}>
              <Picker.Item label="Select..." value="" />
              <Picker.Item label="Yes" value="yes" />
              <Picker.Item label="No" value="no" />
            </Picker>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Upload Photo</Text>
            <TouchableOpacity style={styles.btnPadding}>
              <Image source={require("../assets/cam_small.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Upload Video</Text>
            <TouchableOpacity style={styles.btnPadding}>
              <Image source={require("../assets/vid_cam_small.png")} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow1}>
            <TouchableOpacity style={styles.btnPadding}>
              <Image source={require("../assets/update.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPadding}>
              <Image source={require("../assets/reset.png")} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallBtn: {
    marginLeft: 5,
    backgroundColor: '#6C99D3',
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
    width: '40%',
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
  buttonRow1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnPadding: {
    padding: 10
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
    width: '60%',
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
    paddingTop: 15,
    backgroundColor: '#8dc63f',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
