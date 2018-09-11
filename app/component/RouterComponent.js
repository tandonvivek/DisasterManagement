import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import RescueScreen from "./RescueScreen";
import RescueInfoScreen from "./RescueInfoScreen";
import RescueMoreInfoScreen from "./RescueMoreInfoScreen";
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import DisastersScreen from './DisastersScreen';
import ProvideHlpScrn from './ProvideHlpScrn';
import Kerala from './Kerala';
import Coorg from './Coorg';

const RouterComponent = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center',
          fontFamily: 'MuseoSansRounded-300',
        },
      }
    },
    ProvideHlp: {
      screen: ProvideHlpScrn,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f',
        }
      }
    },
    Rescue: {
      screen: RescueScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f',

        }
      }
    },
    Kerala: {
      screen: Kerala,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f',

        }
      }
    },
    Coorg: {
      screen: Coorg,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f',

        }
      }
    },
    RescueInfo: {
      screen: RescueInfoScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    RescueMoreInfo: {
      screen: RescueMoreInfoScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    Login:{
      screen: LoginScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    Register:
    {
      screen: RegisterScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    Disasters: {
      screen: DisastersScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    }
  });
export default RouterComponent;