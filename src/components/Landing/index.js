import React, { useContext } from 'react'
import Button from '../Button'
import { useHistory } from "react-router-dom";
import { DataContext } from '../../context';

export const Landing = () => {
    let history = useHistory()
    const { isSecure, setIsSecure } = useContext(DataContext)
    return (
        <div>
            <p>Landing page</p>
            <Button
                onClick={() => { isSecure ? setIsSecure(false) : history.push('/login') }}>
                {isSecure ? 'Logout' : 'Login'}
            </Button>
        </div>
    )
}