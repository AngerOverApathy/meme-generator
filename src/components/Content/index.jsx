import React from 'react'
import memesData from '../../memesData.jsx'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState(memesData)
    
    React.useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                setAllMemes(prevAllMemes =>
                    prevAllMemes = response.data.memes
                )
            console.log(allMemes)
            })
    }, [])
    
    
    function getMemeImage() {
        const memesArray = allMemes.data.memes
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
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        className="text-box" 
                        placeholder='Lower Text'
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
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
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </>
    )
}


