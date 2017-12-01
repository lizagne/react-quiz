//Create a component containing <Link>s to all your components and then include it at the bottom of every page

import React from "react";
import { Link } from "react-router-dom";


export default ({ children }) => (
    <div className="container">
        <ul>
            <li><Link to="/">
                Home
            </Link></li>

            <li><Link to="/multiplier">
                Multiplier
            </Link></li>

            <li><Link to="/evenclicks">
                Even Clicks
            </Link></li>

            <li><Link to="/countby">
                Count By
            </Link></li>

            <li><Link to="/hideme">
                Hide Me
            </Link></li>

            <li><Link to="/minimum">
                Minimum 
            </Link></li>
        </ul>
    </div>
);




