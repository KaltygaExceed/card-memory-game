import React from "react";
import { Wrapper, FrontImg, BackImg } from "./card.styles";


const Card = ({ card, callback }) => {
    const handleClick = () => {
        if (card.clickable) callback(card);
    };

    return (
        <Wrapper onClick={handleClick}>
            <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
            <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
        </Wrapper>
    );
};

export default Card;