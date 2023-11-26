import React from "react";
import trollFace from "../../assets/icons/trollface.png";
import '../../App.css'

export default function Header() {
    return  (
        <div className="banner">
            <img src={trollFace} className='troll' alt="Troll Face" />
            <h3>MemeGenerator</h3>
            <p className="course">React Course - Project 3</p>
        </div>
    )
}