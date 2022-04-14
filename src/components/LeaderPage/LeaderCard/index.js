import React from 'react';
import gold from "../../../assets/goldtrophy.png"
import silver from "../../../assets/silvertrophy.png"
import bronze from "../../../assets/bronzetrophy.png"
import {Container, Count, Image, NameContainer, TrophyContainer} from "./leaderCard.styles";

const LeaderCard = (props) => {
    return (
        <Container>
            <NameContainer>{props.name}</NameContainer>
            <Count>{props.count}</Count>
            <TrophyContainer>{props.index === 1 ?
                <Image src={gold} alt=""/> : props.index === 2 ?
                    <Image src={silver} alt=""/> : props.index === 3 ?
                        <Image src={bronze} alt=""/> : props.index}</TrophyContainer>
        </Container>
    )
}

export default LeaderCard;