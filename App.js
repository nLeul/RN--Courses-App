import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Search from 'components/Search';
import Dashboard from 'components/Dashboard';
import ProfileDetails from 'components/ProfileDetails';
import Repositories from 'components/Repositories';
import WebView from 'components/WebView';
import Notes from 'components/Notes';


const Stack = createStackNavigator();

function GitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SEARCH" component={Search} />
      <Stack.Screen name="DASHBOARD" component={Dashboard} />
      <Stack.Screen name="PROFILE" component={ProfileDetails} />
      <Stack.Screen name="REPOSITORIES" component={Repositories} />
      <Stack.Screen name="WEBVIEW" component={WebView} />
      <Stack.Screen name="NOTES" component={Notes} />
    </Stack.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <GitStack />
    </NavigationContainer>

  );
}