import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import haversine from "haversine";

const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

//{this.state.lastPosition} for the current postion
 export default class RescueScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    };
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {},
      error => alert(error.message),
      {
        enableHighAccuracy: false,
        timeout: 25000,
        maximumAge: 3600000
      }
    );
  }
   componentDidMount() {
    const { coordinate } = this.state;
      this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { coordinate, routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }
        const lastPosition = JSON.stringify(position);
        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
    );
  }

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
 }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });
  static navigationOptions = {
    title: 'RESCUE ME',
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
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.resInput}
              placeholder='Enter your name' />
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Mobile:</Text>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.resInput}
              placeholder='Enter your mobile number' />
          </View>
          <View style={styles.buttonRow}>
            <Text style={styles.textFont1}>Comments:</Text>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.comment}
              placeholder='Enter comments' />
              
          </View>
          <MapView
                style={styles.map}
                showUserLocation
                followUserLocation
                loadingEnabled
                region={this.getMapRegion()}
              >
            <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
            <Marker.Animated 
              ref={marker => {
                this.marker = marker;
              }}
              coordinate={this.state.coordinate} />
          </MapView>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("RescueInfo")}>
              <Image source={require("../assets/rescueMe.png")} />
            </TouchableOpacity>
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resInput: {
    fontSize: 18,
    width: '64%',
    height: '82%',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white'
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
  textFont1: {
    fontSize: 18,
    marginRight: 30,
    flexWrap: 'nowrap',
    color: 'white',
    width: 110,
    fontWeight: 'bold'
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#8dc63f',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    marginTop: 250,
    backgroundColor: 'white',
    borderColor: '#ff6600',
    borderWidth: 1,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 360,
    backgroundColor: 'white',
    borderColor: '#ff6600',
    borderWidth: 1,
    width: 120,
    borderRadius: 10,
    flexGrow: 1,
  },
  comment: {
    fontSize: 18,
    width: '64%',
    height: '82%',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
    height: 100,
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
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop:300,
    width:'100%',
    height:300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
});