import React from 'react'

import styles  from './WideCard.module.css';

import { ReactComponent as JazzmanLight } from  '../images/jazzman_light.svg'
import { ReactComponent as JazzmanDark } from  '../images/jazzman_dark.svg'

import { ReactComponent as GirlLight } from  '../images/girl_light.svg'
import { ReactComponent as GirlDark } from  '../images/girl_dark.svg'

import { ReactComponent as WateringLight } from  '../images/watering_light.svg'
import { ReactComponent as WateringDark } from  '../images/watering_dark.svg'


export const WideCard = ({ light = true, variant = "jazzman", text = "Today phone using time", time = "00:24:01" }) => {

    const backgroundColor = light ? "white" : "linear-gradient(90.02deg, #25335A 0.02%, #141824 113.01%)";
    const textColor = light ? "#AD4328" : "white"

    const possibleImages = [
        {
            name: "jazzman",
            image: light ? <JazzmanLight/> : <JazzmanDark/>
        },
        {
            name: "girl",
            image: light ? <GirlLight/> : <GirlDark/>
        },
        {
            name: "watering",
            image: light ? <WateringLight/> : <WateringDark/>
        },
    ];

    const card = possibleImages.find(a => a.name === variant);

    return (
        <div className={styles.container} style={{background: backgroundColor,  border: "1px solid backgroundColor" }}>
            <div className={styles.textContainer}>
                <div style={{color: textColor}} className={styles.topText}>
                    {text}
                </div>
                <div style={{color: textColor}} className={styles.bottomText}>
                    {time} minutes
                </div>
            </div>
            <div className={styles.image}>
                {card.image}
            </div>
        </div>
    )
}
