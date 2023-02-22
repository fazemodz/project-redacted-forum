import React from "react";

import {APIURL} from "./utils/NeededInformation";
const Navbar: React.FC = () => {
    React.useEffect(() => {
       console.log(APIURL);
    }, [])
    return (
        <>
        </>
    )
};
export default Navbar;