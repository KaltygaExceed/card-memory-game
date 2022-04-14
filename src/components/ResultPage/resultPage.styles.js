import styled from "styled-components";

export const Container = styled.div`
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
    font-size: 35px;
    background: linear-gradient(90deg, rgba(255,3,3,1) 0%, rgba(0,39,254,1) 89%);;
    text-decoration: none;
    font-weight: bold;
    font-family: 'MedievalSharp', cursive;
    -webkit-text-stroke: 1px #ffdd32;
    border-radius: 5px;
    border: 2px goldenrod outset;
    color: black;
    box-sizing: border-box;
    &:hover{
        transform: scale(1.05);
    }
`