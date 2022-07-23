import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
function Footer(){
    return(
        <div className="pradyuman">
           <div className="getnow">
    <label >Get To Know Us</label>
</div>
    <div className='ultag'>
        <ul>
            <Link to="/About">
            <li>
            About
            </li>
            </Link>
            <Link to="/Contact">
            
            <li>
                Contact
            </li>
            </Link>

            <Link to="/">
            <li>
                Search
            </li>
            </Link>
            

            <Link to="">
            <li>
                Privacy Policy
            </li>
            </Link>
           

           
            <li>
                Refund Policy
            </li>
            <li>
                Earn Money Online
            </li>
            <li>
                QuickBuyer
            </li>
        </ul>
    </div>
        </div>
    )
}
export default Footer