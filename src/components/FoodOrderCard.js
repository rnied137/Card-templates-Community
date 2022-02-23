import React from 'react'

import imagePlaceholder from '../images/image-placeholder360x216.png';

import { ReactComponent as InfoIcon } from '../images/info_icon.svg';
import { ReactComponent as FireIcon } from '../images/fire_icon.svg';
import { ReactComponent as WheatIcon } from '../images/wheat_icon.svg';

export const FoodOrderCard = ({ withPlaceholder = false }) => {
    return (
        <div style={{ borderRadius: "15px", backgroundColor: "#ffff", width: "360px" }}>
            <div style={{ position: "relative" }}>
                <InfoIcon style={{ position: "absolute", right: "0.5em", top: "0.5em" }} />
                <img style={{ objectFit: "cover", width: "100%", height: "216px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} src={withPlaceholder ? imagePlaceholder : "https://picsum.photos/360/216"} alt="placeholder" />
            </div>
            <div style={{ padding: "2em 2em" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "24px" }}>
                    <span style={{ fontWeight: "bold", fontSize: "24px", textAlign: "left" }}>Pepperoni pizza</span>
                    <div>
                        <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", marginBottom: "auto", marginRight: "15px", backgroundColor: "red", width: "24px", height: "24px", borderRadius: "50%" }}>
                                <FireIcon />
                        </div>
                        <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FFC22B", width: "24px", height: "24px", borderRadius: "50%" }}>
                                <WheatIcon />
                        </div>
                    </div>
                </div>
                <p style={{ textAlign: "left", color: "#A5ADBB" }}>Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust. </p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#A5ADBB", fontSize: "16px" }}>
                    <p>265kcal</p>
                    <p>P/F/C: 12/10/31</p>
                    <p>53.8°C</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{ verticalAlign: "middle", margin: "auto 0", fontWeight: "bold" }}>
                        <span style={{ fontSize: "28px", fontFamily: "DM Serif Display"}}> $23.90</span>
                        <span style={{ marginLeft: "10px", color: "#F8593B", fontSize: "20px", textDecoration: "line-through", fontWeight: "600" }}> $29.90</span>
                    </div>
                    <button style={{ width: "114px", height: "44px", backgroundColor: "#2ECC71", borderRadius: "4px", color: "#ffff", border: "none" }}>ORDER</button>
                </div>
            </div>
        </div>
    )
}
