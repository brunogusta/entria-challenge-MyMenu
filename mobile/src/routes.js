import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Menu from '~/pages/Menu';
import AddItem from '~/pages/AddItem';


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
    AddItem,
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
      initialRouteName: 'App',
    },
  ),
);


export default Routes;
