import "./MatchPage.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";

export const MatchPage = () => {

    const [matches, setMatches] = React.useState([]);
    const { teamName, year } = useParams();

    React.useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            console.log(data);
            setMatches(data);
        };
        fetchMatches();
    }, [teamName, year]);

    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
                <h1 className="page-heading">{teamName} : {year}</h1>
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match}/>)
                }
            </div>
        </div>
    );
};