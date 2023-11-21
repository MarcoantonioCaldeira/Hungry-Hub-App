import styled from "styled-components";
import { theme } from "./Colors";

export const Template = styled.button`
    width: 97%;
    height: 650px;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    background-color: red;
    border-radius: 12px;
    background-color: ${({ them }) => theme.colors.fifth};
`