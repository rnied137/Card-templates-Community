import React from 'react'

import { ReactComponent as PythonIcon } from '../images/python_icon.svg';
import { ReactComponent as ReactIcon } from '../images/react_icon.svg';
import { ReactComponent as DiamondIcon } from '../images/diamond_icon.svg';

export const MoreCard = ({ text = "React - The Complete Guide", colorVariant = "1" }) => {

    const icon = colorVariant === "1" ? <PythonIcon /> :
        colorVariant === "2" ? <ReactIcon /> :
            <DiamondIcon />

    const background = colorVariant === "1" ? "linear-gradient(321.69deg, #FF6188 0%, #FFB199 100%)" :
        colorVariant === "2" ? "linear-gradient(321.69deg, #4481EB 0%, #04BEFE 100%)" :
            "linear-gradient(132.9deg, #63F7A1 1.3%, #27AE60 98.06%), linear-gradient(143.36deg, #D6FF94 3.66%, #3DC24B 103.19%)";

    const fontColor = colorVariant === "1" ? "#FF6188" :
        colorVariant === "2" ? "#4481EB" :
            "#27AE60";

    return (
        <div style={{
            width: "240px",
            height: "224px",
            borderRadius: "15px",
            filter: "drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.04))",
            background: background,
            position: "relative",
            fontFamily: "DM Serif Display"
        }}>
            <div style={{color: "white", fontSize: "26px", padding: "1em"}}>{text} </div>
            <div style={{position: "absolute", top: "1%"}}>{icon}</div>
            <Button style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)", height: "37px", width: "101px", border: "none", color: fontColor, bottom: "10%", right: "5%", position: "absolute" }} />
        </div>
    )
}


const Button = ({ style, className = "" }) => (
    <button className={className} style={{ ...style, cursor: "pointer", borderRadius: "8px" }}> More</button>
)