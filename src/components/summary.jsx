import React from "react";

const Summary = () => {
    return(
        <div className="summary flex">
            <div className="month-total">
                <p>Total this month</p>
                <h1>$234.57</h1>
            </div>
            <div className="stats">
                <h3>+2.4%</h3>
                <p>from last month</p>
            </div>
        </div>
    )
}

export default Summary;