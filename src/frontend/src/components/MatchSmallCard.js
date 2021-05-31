import "./MatchSmallCard.scss";
import React from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = (properties) => {
    const otherTeam = (properties.match.team1 == properties.teamName)?properties.match.team2:properties.match.team1;
    const otherTeamRoute = "/team/"+otherTeam;
    const isMatchWon = properties.teamName == properties.match.matchWinner;

    return (
        <div className={isMatchWon?"MatchSmallCard won-card":"MatchSmallCard lost-card"}>
            <span className="vs">vs</span>
            <h3><Link to={otherTeamRoute}>{otherTeam}</Link></h3>
            <p className="match-winner">{properties.match.winner} won by {properties.match.resultMargin} {properties.match.result}</p>
        </div>
    );
};