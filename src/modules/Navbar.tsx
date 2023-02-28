import React from "react";

import {isuserLoggedin} from "./utils/NeededInformation";
const Navbar: React.FC = () => {
    React.useEffect(() => {
       console.log(isuserLoggedin);
    }, [])
    return (
        <div className="Navbar-container">
            <div className="Navbar-section logo">

            </div>
            <div className="Navbar-section search">

            </div>
            <div className="Navbar-section User">

            </div>
        </div>
    )
};
export default Navbar;