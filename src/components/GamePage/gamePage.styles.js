import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    `

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100%;
    margin-top: 50px;
    `

export const Button = styled(NavLink)`
    font-size: 35px;
    height: 24px;
    width: 100px;
    text-decoration: none;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffdd32;
    color: black;
    box-sizing: border-box;
    &:hover {
    height: 24px;
    width: 100px;
    font-size: 35px;
    transform: scale(1.05);
    text-decoration: none;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffdd32;
    color: black;
    box-sizing: border-box;
    }
    `
export const ContainerCard = styled.div`
 display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-gap: 0.5rem;
    `
