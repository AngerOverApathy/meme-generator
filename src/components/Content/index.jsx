import React from 'react'
import memesData from '../../memesData.jsx'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
        
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
            <>
            <div className="content">
                <div className="inputs">
                    <input 
                        type="text" 
                        className="text-box" 
                        placeholder='Upper Text'
                    />
                    <input 
                        type="text" 
                        className="text-box" 
                        placeholder='Lower Text'
                    />
                </div>
                <button 
                    className="btn" 
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>

            <div className="meme"> 
                <img src={meme.randomImage} className="meme-image" />
            </div>
            </>
    )
}