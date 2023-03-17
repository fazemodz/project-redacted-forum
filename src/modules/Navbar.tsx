import React from "react";
import '../resources/css/Navbar.css'
import { APIURL } from "../resources/utils/NeededInformation";
const Navbar: React.FC = () => {
    React.useEffect(() => {
        console.log(APIURL);
    }, [])
    return (
        <>
            <div className="Navbar-container">
                <div className="Navbar-section logo ">
                    {/* <a href="/">
                        <img className='Logo-img' src='' alt="Logo" />
                    </a> */}
                </div>
                <div className="Navbar-section SearchBar">
                    
                </div>
                <div className="Navbar-section Dead-space">

                </div>
            </div>
        </>
    )
};
export default Navbar;