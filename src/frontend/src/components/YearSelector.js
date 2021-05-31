import "./YearSelector.scss";
import React from "react";
import { Link } from "react-router-dom";

export const YearSelector = (properties) => {
    
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    for(let i=startYear; i<=endYear; i++){
        years.push(i);
    }

    return (
        <ol className="year-selector">
            {
                years.map(year => (
                    <li key={year}>
                        <Link to={`/team/${properties.teamName}/year/${year}`}>{year}</Link>
                    </li>
                    )
                )
            }
        </ol>
    );
};