import React, { Component } from 'react';
import { View, Text, Modal ,TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state = {
        loggedIn:null // not false and not true (so we will wait for firebase to sync)
    }

    componentWillMount(){
        // Initialize Firebase (from WEB setup)
        var config = {
            apiKey: "AIzaSyAUc1mO06d3j6qktJiBRilTE2Qp8e089hI",
            authDomain: "authentication-c705f.firebaseapp.com",
            databaseURL: "https://authentication-c705f.firebaseio.com",
            storageBucket: "authentication-c705f.appspot.com",
            messagingSenderId: "711920754423"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user)=>{
             // what happens when user signs in or signs out
             // user is null if signed out
             if(user){
                 // user exists => logged in 
                 this.setState({loggedIn:true})
             }else{
                 this.setState({loggedIn:false})
             }
        })

    }

    
    handleLogin = () =>{
        console.log('log in')
    }

    logOut(){
        firebase.auth().signOut();
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                // user logged in
                return (
                    <CardSection>
                    <Button
                        onPress={()=>{ this.logOut()}}>
                        Log Out
                    </Button>
                    </CardSection>
                )
            case false:
                // user not logged in
                return(
                    <View>
                        <LoginForm onPress={() => this.handleLogin()}/>
                    </View>
                )   
            case null:
                // unknown yet-  syncing with firebase
                return (
                    <Spinner size="large"/>
                )

        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        )
    }


}


const styles = {
}

export default App;