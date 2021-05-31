import "./HomePage.scss";
import React from "react";
import { TeamTile } from "../components/TeamTile";

export const HomePage = () => {
    const [teams, setTeams] =  React.useState([]);

    React.useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch("/teams/");
            const data = await response.json();
            console.log(data);
            setTeams(data);
        };
        fetchTeams();
    }, []);

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard ({process.env.REACT_APP_DATA_START_YEAR}-{process.env.REACT_APP_DATA_END_YEAR})</h1>
            </div>
            <div className="teams-grid">
                {
                    teams.map(team=><TeamTile key={team.id} teamName={team.teamName}/>)
                }
            </div>
        </div>
    );
};