import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Menu from '~/pages/Menu';
import AddItem from '~/pages/AddItem';


const configs = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 16 * 4,
      backgroundColor: '#FFFFFF',
      borderBottomColor: 'transparent',
      elevation: 0,
    },
    headerBackImage: <Icon name="ios-arrow-round-back" type="ionicon" color="#C5CCD6" size={40} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: 16,
      paddingRight: 16,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: 16,
    },
  },
};


const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    headerMode: 'none',
  },
);


const AppStack = createStackNavigator(
  {
    Main: {
      screen: Menu,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  AddItem,
  configs,
  {
    mode: 'modal',
  },
);


const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);


export default Routes;
