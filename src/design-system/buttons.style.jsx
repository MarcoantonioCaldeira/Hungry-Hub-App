import styled from "styled-components";
import { theme } from "./Colors";



export const ButtonStyledMenu = styled.button`
    width:230px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #658C3B;
    text-decoration: none;
    color: white;
    font-weight: 300;
    background-color: ${({ them }) => theme.colors.fifth};

    a{
        text-decoration:none;
        color:white;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size:20px;
    }

`

export const ButtonStyledMenuTwo = styled.button`
    display:inline-block;
    background-color: white;
    border: solid 1px white;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-weight: 300;
    
    a{
        text-decoration:none;
        color: ${({ them }) => theme.colors.fifth};
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size:20px;
    }
`


