import React from 'react';
import { StatusBar } from 'react-native';
import './ReactotronConfig';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import FlashMessage from 'react-native-flash-message';
import Routes from '~/routes';

import Environment from './relay/Environment';

const App = () => (
  <>
    <RelayEnvironmentProvider environment={Environment}>
      <StatusBar barStyle="light-content" backgroundColor="#262d3d" />
      <Routes />
      <FlashMessage position="top" />
    </RelayEnvironmentProvider>
  </>
);

export default App;
