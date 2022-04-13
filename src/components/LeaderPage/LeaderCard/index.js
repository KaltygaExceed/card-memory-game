import React from 'react';
import style from "./leaderCard.module.css";
import gold from "../../../assets/goldtrophy.png"
import silver from "../../../assets/silvertrophy.png"
import bronze from "../../../assets/bronzetrophy.png"

const LeaderCard = (props) => {

    return (
        <div className={style.container}>
            <div className={style.nameContainer}>{props.name}</div>
            <div className={style.count}>{props.count}</div>
            <div className={style.trophyContainer}>{props.index === 1 ?
                <img className={style.image} src={gold} alt=""/> : props.index === 2 ?
                    <img className={style.image} src={silver} alt=""/> : props.index === 3 ?
                        <img className={style.image} src={bronze} alt=""/> : props.index}</div>
        </div>
    );
};

export default LeaderCard;