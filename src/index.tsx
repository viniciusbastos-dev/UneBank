import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <FlashMessage
        position="top"
        statusBarHeight={StatusBar.currentHeight}
        floating
      />
    </NavigationContainer>
  );
};

export default App;
