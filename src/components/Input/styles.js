import styled from 'styled-components'

export const Input = styled.input`
    height: 40px;
    width: 350px;
    border: 1px solid ${p => p.borderColor ? p.borderColor : 'gray'};
    border-radius: 5px;
    font-size: 20px;
    color: #3c4859;

`