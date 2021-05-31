import "./TeamTile.scss";
import React from "react";
import { Link } from "react-router-dom";

export const TeamTile = (properties) => {
    //
    return (
        <div className="TeamTile">
            <Link to={`/team/${properties.teamName}`}>
                <h1>{properties.teamName}</h1>
            </Link>
        </div>
    );
};