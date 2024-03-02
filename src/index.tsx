import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';
import {AuthProvider} from './contexts/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <FlashMessage
          position="top"
          statusBarHeight={StatusBar.currentHeight}
        />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
