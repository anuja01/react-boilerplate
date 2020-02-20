import React from 'react'
import Button from '../Button'
import { useHistory } from "react-router-dom";

export const Landing = () => {
    let history = useHistory()
    return (
        <div>
            <p>Landing page</p>
            <Button
                onClick={() => history.push('/login')}>
                Login
            </Button>
        </div>
    )
}