import React from 'react'

import styles from './FoodOrderCard.module.css';

import imagePlaceholder from '../images/image-placeholder360x216.png';

import { ReactComponent as InfoIcon } from '../images/info_icon.svg';
import { ReactComponent as FireIcon } from '../images/fire_icon.svg';
import { ReactComponent as WheatIcon } from '../images/wheat_icon.svg';

export const FoodOrderCard = ({ withPlaceholder = false }) => {
    return (
        <div className={styles.card__container}>
            <div style={{ position: "relative" }}>
                <InfoIcon className={styles.info__icon} />
                <img style={{ objectFit: "cover", width: "100%", height: "216px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} src={withPlaceholder ? imagePlaceholder : "https://picsum.photos/360/216"} alt="placeholder" />
            </div>
            <div style={{ padding: "2em 2em" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "24px" }}>
                    <h2 style={{ fontWeight: "bold", fontSize: "24px", textAlign: "left" }}>Pepperoni pizza</h2>
                    <div style={{ borderRadius: "50%", position: "relative", backgroundColor: "#FFC22B", width: "24px", height: "24px" }}>
                        <WheatIcon className="center-element" />
                    </div>
                    <div style={{ position: "relative", borderRadius: "50%", textAlign: "center", backgroundColor: "red", width: "24px", height: "24px" }}>
                        <FireIcon className="center-element" />
                    </div>
                </div>
                <p style={{ textAlign: "left", color: "#A5ADBB" }}>Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust. </p>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", color: "#A5ADBB", fontSize: "16px" }}>
                    <p>265kcal</p>
                    <p>P/F/C: 12/10/31</p>
                    <p>53.8°C</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{ verticalAlign: "middle", margin: "auto 0", fontWeight: "bold" }}>
                        <span style={{ fontSize: "28px", fontFamily: "DM Serif Display" }}> $23.90</span>
                        <span style={{ marginLeft: "10px", color: "#F8593B", fontSize: "20px", textDecoration: "line-through", fontWeight: "600" }}> $29.90</span>
                    </div>
                    <button className={styles.button}>ORDER</button>
                </div>
            </div>
        </div>
    )
}
