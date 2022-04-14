import React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';
//import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
