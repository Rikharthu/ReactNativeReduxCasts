import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component{

    state={
         email :'',
         password:''
        };

    render(){
        return(

            <Card>
                <CardSection>
                    <Input 
                        placeholder={'user@mail.com'}
                        label={"Email"}
                        value={this.state.text}
                        onChangeText={ text => this.setState({email: text}) }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        type={"password"}
                        label={"Password"}
                        placeholder={'password'}
                        value={this.state.text}
                        onChangeText={ text => this.setState({password: text}) }
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection> 
                              
            </Card>
        )
    }

}

export default LoginForm;

