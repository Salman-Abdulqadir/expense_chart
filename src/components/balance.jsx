import React from "react";

//image
import logo from "../images/logo.svg";
const Balance = ({balance}) => {
    return(
        <div className="balance-container flex">
            <div className="balance">
                <p>My Balance</p>
                <h2 id="balance-amount">${balance}</h2>
            </div>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Balance;