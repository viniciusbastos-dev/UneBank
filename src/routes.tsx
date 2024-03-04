/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'react-native';
import SignUp from './screens/SignUp';
import {useAuth} from './contexts/AuthContext';
import * as SVG from './assets/SVG';

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

const SignedOutStack = () => {
  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
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
          backgroundColor: '#27273A',
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
        },
      })}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}: any) => ({
          title: 'Início',
          tabBarIcon: ({focused, color}: any) => <SVG.HomeIcon fill={color} />,
        })}
      />
      <Stack.Screen
        name="MyCards"
        component={Home}
        options={({navigation}: any) => ({
          title: 'Cartões',
          tabBarIcon: ({focused, color}: any) => <SVG.CardsIcon fill={color} />,
        })}
      />
      <Stack.Screen
        name="Statistics"
        component={Home}
        options={({navigation}: any) => ({
          title: 'Extrato',
          tabBarIcon: ({focused, color}: any) => (
            <SVG.StatisticsIcon fill={color} />
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Home}
        options={({navigation}: any) => ({
          title: 'Configurações',
          tabBarIcon: ({focused, color}: any) => (
            <SVG.SettingsIcon fill={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const {user} = useAuth();
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
    return <View style={{flex: 1, backgroundColor: '#161622'}} />;
  }

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      {!hasOnboarded && (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
      {!user ? (
        <Stack.Screen name="Sign" component={SignedOutStack} />
      ) : (
        <Stack.Screen name="MyTabs" component={MyTabs} />
      )}
    </Stack.Navigator>
  );
};

export default Routes;
