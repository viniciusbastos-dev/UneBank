/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navigatorOptions: any = {
  headerShown: false,
  detachPreviousScreen: false,
  presentation: 'card',
  cardStyle: {backgroundColor: '#fff'},
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  firstRoute: 'Home',
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}: any) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        headerShown: false,
        unmountOnBlur: true,
        tabBarInactiveTintColor: '#8B8B94',
        tabBarActiveTintColor: '#0066FF',
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
        },
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCards" component={Home} />
      <Stack.Screen name="Statistics" component={Home} />
      <Stack.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@HasOnBoarded');
      setHasOnboarded(value !== null);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    // eslint-disable-next-line react-native/no-inline-styles
    return <View style={{flex: 1, backgroundColor: '#161622'}} />;
  }

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      {!hasOnboarded && (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
};

export default Routes;
