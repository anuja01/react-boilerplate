import React from 'react'
import Button from '../Button'
import Input from "../Input";
import { LoginContainer } from './styles'
import { useHistory } from "react-router-dom";

export const Login = () => {
    let history = useHistory()
    return (
        <LoginContainer>
            <div>Please Login</div>
            <Input type='input' placeholder='user name'></Input>
            <Input type='password' placeholder='password'></Input>
            <Button
                onClick={() => history.replace("home")}
                buttonColor='#0facf3'
                borderColor='#0facf3'
                textColor='#ffffff'
            >Login</Button>
            <Button
                onClick={() => alert('logout attempt')}
                borderColor='#0facf3'
                textColor='#0facf3'
            >Logout</Button>
        </LoginContainer>
    )
}