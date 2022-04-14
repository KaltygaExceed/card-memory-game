import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const AppContainer = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #ffdd32;
    font-size: 40px;
    background: linear-gradient(0deg, rgba(14, 2, 4, 1) 0%, rgba(52, 52, 52, 1) 17%, rgba(13, 0, 0, 1) 51%, rgba(61, 61, 61, 1) 83%, rgba(0, 0, 0, 1) 100%);
`

export const Footer = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(14, 2, 4, 1) 0%, rgba(52, 52, 52, 1) 17%, rgba(13, 0, 0, 1) 51%, rgba(61, 61, 61, 1) 83%, rgba(0, 0, 0, 1) 100%);
`

export const Image = styled.img`
    height: 45px;
`

export const LeftButton = styled(NavLink)`
    background: linear-gradient(0deg, rgba(140,10,10,1) 0%, rgba(255,17,17,1) 23%, rgba(210,3,3,1) 50%, rgba(255,17,17,1) 77%, rgba(133,0,0,1) 100%);
    border-radius: 5px;
    padding: 5px;
    color: black;
    border: 1px #ec8a13 outset;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffdd32;
    text-decoration: none;
    margin: 10px;
    &:hover{
    transform: scale(1.05);
    }
`

export const RightButton = styled.a`
    background: linear-gradient(0deg, rgba(18,10,140,1) 0%, rgba(13,93,187,1) 23%, rgba(3,63,210,1) 50%, rgba(12,111,195,1) 77%, rgba(0,5,133,1) 100%);;
    color: #fff430;
    padding: 5px;
    border: 1px #ffc73a outset;
    border-radius: 5px;
    font-weight: bold;
    -webkit-text-stroke: 1px #ffa332;
    text-decoration: none;
    margin: 10px;
    &:hover{
    transform: scale(1.05);
    }
`