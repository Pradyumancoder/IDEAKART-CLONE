import React from "react";
import styles from "./Footer.module.css"
function Footer(){
    return(
        <div>
           <div className={styles.getnow}>
    <label >Get To Know Us</label>
</div>
    <div className={styles.ultag}>
        <ul>
            <li>
            About
            </li>
            <li>
                Contact
            </li>
            <li>
                Search
            </li>
            <li>
                Privacy Policy
            </li>
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