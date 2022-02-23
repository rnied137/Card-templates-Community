import React from 'react'
import styles from './BuyNowCard.module.css';

import { ReactComponent as SkateboardGuy } from '../images/skateboard_guy.svg';

export const BuyNowCard = ({ extended = false }) => {
    return (
        <div style={{ width: extended ? "656px" : "416px", padding: "1em", backgroundColor: "#ffff", position: "relative", margin: "2em 0", borderRadius: "8px", border: extended ? "2px solid black" : "" }}>
            <div style={{ paddingBottom: "4rem" }}>
                <BestOffer style={{ backgroundColor: "blue", position: "absolute", right: "3em" }} />
            </div>
            <div></div>

            {extended && <div className={styles.image}><SkateboardGuy /></div>}
            <div style={{ display: "flex", flexDirection: "column", padding: "2em", alignItems: "center", justifyContent: "space-around" }}>
                <div style={{ fontSize: "17px" }}>
                    PREMIUM
                </div>
                <div style={{ fontFamily: "DM Serif Display", fontSize: "72px", fontWeight: "bold", letterSpacing: "2.8px" }}>$85<span style={{ fontSize: "22px", color: "gray" }}>/mo</span>
                </div>
                <div>
                    <div style={{ padding: "1em" }}>
                        <span style={{ fontWeight: "600" }}>Everyday </span>
                        <span style={{ color: "gray", fontWeight: "400" }}> Fashion reviews</span></div>
                    <div style={{ padding: "1em" }}>
                        <span style={{ fontWeight: "600" }}>Access to </span>
                        <span style={{ color: "gray", fontWeight: "400" }}>Limited collections</span></div>
                    <div style={{ padding: "1em" }}>
                        <span style={{ fontWeight: "600" }}>Up to 7 </span>
                        <span style={{ color: "gray", fontWeight: "400" }}> Personal consults</span></div>                
                        </div>
                <div>
                    <button style={{ cursor: "pointer", width: "288px", height: "67px", padding: "1em 0", marginTop: "3em", backgroundColor: "#F8593B", color: "white", border: "none" }}> BUY NOW</button>
                </div>
            </div>
        </div>
    )
}



const BestOffer = ({ style, className = "" }) => {
    return (

        <div className={className} style={{
            ...style, backgroundColor: "#FFC22B", color: "#ffff", borderRadius: "5px", width: "99px", height: "25px", fontSize: "10px", display: "flex",
            justifyContent: "center"
        }}>
            <p style={{ margin: "auto" }}>BEST OFFER</p>
        </div>
    )
}