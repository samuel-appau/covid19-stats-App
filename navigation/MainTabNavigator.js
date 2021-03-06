import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CloudScreen from '../screens/CloudScreen';
import ProfileScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="ios-home"
      
      
    />
  ),
};

HomeStack.path = '';

const DocumentStack = createStackNavigator(
  {
    Links: CloudScreen,
  },
  config
);

DocumentStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-settings" />
  ),
};

DocumentStack.path = '';


const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Report',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-send"/>
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DocumentStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
