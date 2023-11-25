import React from "react";
import './App.css';
import trollFace from './assets/icons/trollface.png'

export default function App() {
  return (

    <div>

      <div className="banner">
        <img src={trollFace} className='troll' alt="Troll Face" />
        <h3>MemeGenerator</h3>
        <p className="course">React Course - Project 3</p>
      </div>

      <div className="content">
        <div className="inputs">
            <input type="text" className="text-box" placeholder='Upper Text'/>
            <input type="text" className="text-box" placeholder='Lower Text'/>
        </div>
        <button className="btn">Get a new meme image  🖼</button>
      </div>

      <div className="meme"> 
        <p>image placeholder</p>
      </div>

    </div>
)}