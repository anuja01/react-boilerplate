import React, { useContext } from 'react'
import Button from '../Button'
import Input from "../Input";
import { LoginContainer } from './styles'
import { useHistory, useLocation } from "react-router-dom";
import { DataContext } from '../../context';

export const Login = () => {
    let history = useHistory()
    let location = useLocation()
    // access data from context
    const { isSecure, setIsSecure } = useContext(DataContext)

    // if from is available redirect back to that page
    // else got to root
    let { from } = location.state || { from: { pathname: "/" } }
    return (
        <LoginContainer>
            {
                !isSecure ?
                    <>
                        <div>Please Login</div>
                        <Input type='input' placeholder='user name'></Input>
                        <br />
                        <Input type='password' placeholder='password'></Input>
                        <br />
                        <Button
                            onClick={() => { setIsSecure(true); history.replace(from) }}
                            buttonColor='#0facf3'
                            borderColor='#0facf3'
                            textColor='#ffffff'
                        >Login</Button>
                    </> :
                    <>
                        <p>You already logged in, logout if you want</p>
                        <Button
                            onClick={() => { setIsSecure(false); history.replace("/") }}
                            borderColor='#0facf3'
                            textColor='#0facf3'
                        >Logout</Button>
                    </>
            }
        </LoginContainer>
    )
}