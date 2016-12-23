import React, { Component } from 'react';
import { View, Text, Modal ,TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

import Video from 'react-native-video'

class App extends Component{

    state = {
        modalVisible: false,
    }

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

    
    handleLogin = () =>{
        console.log('log in')
        this.setState({modalVisible:true})
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'black' }}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                <View style={{marginTop: 22,backgroundColor:'white',padding:10}}>
                    <Text>You are logged in</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <TouchableHighlight onPress={()=>{ this.setState({modalVisible:false})}}>
                        <Text style={{color:'blue', fontSize:22, fontWeight:'bold'}}>Hide</Text>
                    </TouchableHighlight>
                    </View>

                </View>
        </Modal>

                <Video source={require('./video/itdw.mp4')}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                             // Store reference
                        rate={1.0}                     // 0 is paused, 1 is normal.
                        volume={1.0}                   // 0 is muted, 1 is normal.
                        muted={true}                  // Mutes the audio entirely.
                        paused={false}                 // Pauses playback entirely.
                        resizeMode="cover"             // Fill the whole screen at aspect ratio.
                        repeat={true}                  // Repeat forever.
                        playInBackground={false}       // Audio continues to play when app entering background.
                        playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
                        progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                        onLoadStart={this.loadStart}   // Callback when video starts to load
                        onLoad={this.setDuration}      // Callback when video loads
                        onProgress={this.setTime}      // Callback every ~250ms with currentTime
                        onEnd={this.onEnd}             // Callback when playback finishes
                        onError={this.videoError}      // Callback when video cannot be loaded
                        style={styles.backgroundVideo} 
                        />
                        <View style={styles.loginFormContainer} >
                            <LoginForm onPress={() => this.handleLogin()}/>
                        </View>
            </View>
        )
    }


}


const styles = {
  backgroundVideo: {
      position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginFormContainer:{
      marginRight:20,
      marginLeft:20,
      marginTop:140,
  }
}

export default App;