import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Menu from '~/pages/Menu';


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
    Menu,
  },
  {
    headerMode: 'none',
  },
);


const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);


export default Routes;
