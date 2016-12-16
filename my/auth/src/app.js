import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAUc1mO06d3j6qktJiBRilTE2Qp8e089hI",
            authDomain: "authentication-c705f.firebaseapp.com",
            databaseURL: "https://authentication-c705f.firebaseio.com",
            storageBucket: "authentication-c705f.appspot.com",
            messagingSenderId: "711920754423"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }

}

export default App;