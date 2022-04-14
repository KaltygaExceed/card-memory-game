import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 50px;
    border: 1px white solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 1px;
    border-radius: 5px;
    background: radial-gradient(circle, rgba(140,0,0,1) 0%, rgba(74,0,0,1) 100%);
    `

export const TrophyContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    color: white;
    font-size: 37px;
    `

export const NameContainer = styled.p`
    color: white;
    font-size: 37px;
    width: 350px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    `

export const Count = styled.p`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 37px;
    border: 1px white solid;
    box-sizing: border-box;
    `

export const Image = styled.img`
    width: 49px;
    `