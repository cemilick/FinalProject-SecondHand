import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/routes/BottomTab';
const App = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <BottomTab />
    </Stack.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({});
