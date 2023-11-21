import styled from "styled-components";
import { theme } from "./Themes";



export const ButtonStyled = styled.button`
    width:230px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #658C3B;
    text-decoration: none;
    color: white;
    font-weight: 300;
    margin-left: ${(prop) => prop.left? prop.left: '80%'};
    margin-top:-20px;
    background-color: ${({ them }) => theme.colors.fifth};

    a{
        text-decoration:none;
        color:white;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size:20px;
    }

`

export const ButtonStyledTwo = styled.button`
    display:inline-block;
    border: solid 1px white;
    margin-left
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-weight: 300;
    
    a{
        text-decoration:none;
        color: #658C3B;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size:20px;
    }
`


