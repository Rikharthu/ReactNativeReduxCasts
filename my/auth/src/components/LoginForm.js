import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import {Text} from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component{

    state={
         email :'',
         password:'',
         error:'',
         loading:false
        };

    onButtonPress(){
        const {email,password} = this.state;

        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                // signed in successfully
                this.onLoginSuccess();
            })
            .catch(()=>{
                // failed to sign in - attempt to create an account
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this)) // same as above, just different syntax
                    .catch(()=>{
                        this.onLoginFail();
                    })
            })
    }

    onLoginFail(){
        console.log('login fail');
        this.setState({
            error:'Authentication Failed.',
            loading:false
        })
    }

    onLoginSuccess(){
        console.log('login success');
        this.setState({
            email: '',
            password:'',
            loading:false,
            error:''
        })
    }

    renderButton(){
        // if logging - show spinner, else - button
        if(this.state.loading){
            return <Spinner size="small" />
        }else{
             return (                 
                <Button 
                    onPress={this.onButtonPress.bind(this)}>
                    {/* Bind function to the current context, because this is a callback function 
                        and without binding the value of 'this' will be equal to whatever 
                        the value of 'this' was at the calltime .
                        Is equal to onPress={()=> this.onButtonPress()} */}
                    Log in
                </Button>
             )   
        }
    }

    render(){
        return(

            <Card>
                <CardSection>
                    <Input 
                        placeholder={'user@mail.com'}
                        label={"Email"}
                        value={this.state.email}
                        onChangeText={ text => this.setState({email: text}) }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        type={"password"}
                        label={"Password"}
                        placeholder={'password'}
                        value={this.state.password}
                        onChangeText={ text => this.setState({password: text}) }
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection> 
                              
            </Card>
        )
    }

}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginForm;

