import React from "react";
import'./resources/Header.css'
import {isuserLoggedin} from "./utils/NeededInformation";
const Navbar: React.FC = () => {
    React.useEffect(() => {
       console.log(isuserLoggedin);
    }, [])
    const checkuser = () => {
        if(isuserLoggedin !== 'true'){
            alert("user not logged in")
        }else{
            alert("user logged in")
        }
    }
    
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