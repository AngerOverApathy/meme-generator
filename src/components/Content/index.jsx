import React from "react";

export default function Content() {
    return (
        <>
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
        </>
  )
}