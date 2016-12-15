/*eslint linebreak-style: ["error", "windows"]*/
/**
 * this is the ENTRY POINT for android application
 * place ANDROID code here
 */

// import required libraries (ES6 syntax)
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
// import our custom components
import Header from './src/components/Header'; // ./ => start from current dir
import AlbumList from './src/components/AlbumList';


// create a component (it's a function that returns a react component)
const App = () => (
  // JSX syntax get's converted into JavaScript code 
    <View style={{ flex: 1 }} > 
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);


// render it to the device screen
// for every app we must register at least 1 component
AppRegistry.registerComponent('albums', () => App);
// 'albums' - application names (must match project name)
// App - actual component
