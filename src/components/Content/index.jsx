import React from 'react'


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    
    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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


