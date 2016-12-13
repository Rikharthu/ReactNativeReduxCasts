/**
 * this is the ENTRY POINT for android application
 * place ANDROID code here
 */

// import required libraries (ES6 syntax)
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
// import our custom components
import Header from './src/components/header'; // ./ => start from current dir


// create a component (it's a function that returns a react component)
const App = () => (
  // JSX syntax get's converted into JavaScript code 

    <Header />
);


// render it to the device screen
// for every app we must register at least 1 component
AppRegistry.registerComponent('albums', () => App);
// 'albums' - application names (must match project name)
// App - actual component
