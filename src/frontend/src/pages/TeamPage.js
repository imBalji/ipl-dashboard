import "./TeamPage.scss";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {

    const [team, setTeam] =  React.useState({matches: []});
    const { teamName } = useParams();

    React.useEffect(() => {
        const fetchTeam = async () => {
            const response = await fetch(`/team/${teamName}`);
            const data = await response.json();
            console.log(data);
            setTeam(data);
        };
        fetchTeam();
    }, [teamName]);

    if(!team || !team.teamName)
        return <h1>Team not found</h1>;

    return (
        <div className="TeamPage">

            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>

            <div className="win-loss-section">
                Wins/Losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins, color: '#54e1a3' }
                    ]}
                />
            </div>

            <div className="match-detail-section">
                <h3>Latest matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            </div>

            {
                team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match}/>)
            }

            <div className="more-link">
                <Link to={`/team/${teamName}/year/${process.env.REACT_APP_DATA_END_YEAR}`}>
                    <h3>More+</h3>
                </Link>
            </div>
            
        </div>
    );
};