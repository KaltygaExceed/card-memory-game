import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card";
import {plusPoint, minusPoint} from "../../redux/actions/actions"
import { createBoard } from "../../utils/board";
import { shuffleArray } from "../../utils/utils";
import { useDispatch } from "react-redux";
import {Container, Button, ContainerButton, ContainerCard} from "./gamePage.styles"

const GamePage = () => {
    const dispatch = useDispatch();
    const [cards, setCards] = useState(shuffleArray(createBoard()))
    const [matchedPairs, setMatchedPairs] = useState(0)
    const [clickedCard, setClickedCard] = useState(
        undefined
    )
    const [gameEnd, setGameEnd] = useState(false)

    useEffect(() => {
        if (matchedPairs === cards.length / 2) {
            setGameEnd(true)
        }
    }, [matchedPairs])

    const onCardClick = (currentClickedCard) => {
        setCards(prev =>
            prev.map((card) =>
                card.id === currentClickedCard.id
                    ? { ...card, flipped: true, clickable: false }
                    : card
            )
        );
        if (!clickedCard) {
            setClickedCard({ ...currentClickedCard })
            return
        }

        if (
            clickedCard.matchingCardId === currentClickedCard.id ||
            clickedCard.id === currentClickedCard.matchingCardId
        ) {
            dispatch(plusPoint());
            setMatchedPairs((prev) => prev + 1)
            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id || card.id === currentClickedCard.id
                        ? { ...card, clickable: false }
                        : card
                )
            )
            setClickedCard(undefined)
            return;
        }
        dispatch(minusPoint())

        setTimeout(() => {
            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id || card.id === currentClickedCard.id
                        ? { ...card, flipped: false, clickable: true }
                        : card
                )
            )
        }, 1000)

        setClickedCard(undefined);
    };

    return (

            <Container>
                {" "}
                {gameEnd && (
                    <ContainerButton>
                        <Button to="/results"> Results!</Button>
                    </ContainerButton>
                )}
                <ContainerCard>
                    {cards.map((card) => (
                        <Card key={card.id} callback={onCardClick} card={card} />
                    ))}
                </ContainerCard>
            </Container>


    );
};

export default GamePage