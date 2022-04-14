import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin: auto;
    height: 100%;
    `

export const ContainerInput = styled.input`
    text-align: center;
    height: 40px;
    font-size: 20px;
    font-family: 'MedievalSharp', cursive;
    `

export const Button = styled(NavLink)`
    margin: 15px;
    font-size: 35px;
    width: 150px;
    height: 150px;
    text-decoration: none;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffdd32;
    color: black;
    box-sizing: border-box;
    &:hover{
        margin: 15px;
    font-size: 38px;
    text-decoration: none;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffdd32;
    color: black;
    box-sizing: border-box;
    }
`