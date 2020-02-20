import styled from 'styled-components'

export const Button = styled.button`
    height: 40px;
    width: 150px;
    border-radius: 10px;
    font-size: 20px;
    background-color: ${p => p.buttonColor && p.buttonColor};
    color: ${p => p.textColor ? p.textColor : 'black'};
    border: 1px solid ${p => p.borderColor ? p.borderColor : 'black'};
`