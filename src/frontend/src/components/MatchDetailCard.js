import "./MatchDetailCard.scss";
import React from "react";
import { Link } from "react-router-dom";

export const MatchDetailCard = (properties) => {
    if(!properties.match) return null;

    const otherTeam = (properties.match.team1 == properties.teamName)?properties.match.team2:properties.match.team1;
    const otherTeamRoute = "/team/"+otherTeam;
    const isMatchWon = properties.teamName == properties.match.matchWinner;

    return (
        <div className={isMatchWon?"MatchDetailCard won-card":"MatchDetailCard lost-card"}>
            <div className="">
                <span className="vs">vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h2 className="match-date">{properties.match.date}</h2>
                <h3 className="match-venue">{properties.match.venue}</h3>
                <h3 className="match-winner">{properties.match.winner} won by {properties.match.resultMargin} {properties.match.result}</h3>
            </div>
            <div className="additional-detail">
                <h3>First Innings</h3>
                <p>{properties.match.team1}</p>
                <h3>Second Innings</h3>
                <p>{properties.match.team2}</p>
                <h3>Man of the Match</h3>
                <p>{properties.match.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{properties.match.umpire1} , {properties.match.umpire2}</p>                
            </div>
        </div>
    );
};