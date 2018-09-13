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
import Place from './Place';
import Place2 from './Place2';
import LoginHomeScreen from './LoginHomeScreen';
import LoginHomeScreen_1 from './LoginHomeScreen_1';
import AdditionalInfoScreen from './AdditionalInfoScreen';
import GetHelpScreen from './GetHelpScreen'

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
      screen: Place,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f',

        }
      }
    },
    Coorg: {
      screen: Place2,
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
    Login: {
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
    },
    LoginHome: {
      screen: LoginHomeScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    LoginHome_1: {
      screen: LoginHomeScreen_1,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    getHelp: {
      screen: GetHelpScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    },
    
    AddtionalInfo: {
      screen: AdditionalInfoScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#8dc63f'
        }
      }
    }
  });
export default RouterComponent;