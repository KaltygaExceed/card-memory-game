import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NoGamesText = styled.p`
    font-size: 35px;
    -webkit-text-stroke: 1px #ffdd32;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Button = styled.button`
    margin: 15px;
    background: none;
    border: none;
    font-weight: bold;
    font-family: 'MedievalSharp', cursive;
    -webkit-text-stroke: 1px #ffdd32;
    font-size: 29px;
    &:hover{
    transform: scale(1.05);
    }
    `
