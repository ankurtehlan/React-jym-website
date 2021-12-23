import React from "react";
import Background from "../images/offer.png";
export default function Offer() {
    return(
        <>
        <div id="presentation" style={{background: `url(${Background})`,}}>
            <div className="pr-heading">
                <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <p className="details"> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
                <div className="pr-btns">
                    <a href="home" className="pr-btn">JOIN NOW</a>
                </div>
            </div>
        </div>
        </>
    );
}