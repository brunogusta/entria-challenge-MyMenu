import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';

import FlashMessage from 'react-native-flash-message';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#262d3d" />
    <Routes />
    <FlashMessage position="top" />
  </>
);

export default App;
