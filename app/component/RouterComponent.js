import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import RescueScreen from "./RescueScreen";
import RescueInfoScreen from "./RescueInfoScreen";
import RescueMoreInfoScreen from "./RescueMoreInfoScreen";

const RouterComponent = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
          fontFamily: 'MuseoSansRounded-300',
        },
      }
    },
    Rescue: {
      screen: RescueScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'brown',
        }
      }
    },
    RescueInfo: {
      screen: RescueInfoScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red'
        }
      }
    },
    RescueMoreInfo: {
      screen: RescueMoreInfoScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red'
        }
      }
    },
    Disasters: {
      screen: DisastersScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'red'
        }
      }
    }
  });
export default RouterComponent;