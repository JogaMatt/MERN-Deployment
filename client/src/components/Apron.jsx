import React from 'react'
import './style.css'



const Apron = () => {

    const mouseOver = (element) => {
        element.target.style.color = 'white'
        element.target.style.cursor = 'pointer'
    }

    const mouseOut = (element) => {
        element.target.style.color = ''
        element.target.style.cursor = ''
    }
  return (
    <div id="apron">
        <div id='apronContent' style={{marginRight: 40}}>
            <div className="links">
                <h5 style={{color: 'white', fontFamily: 'sans-serif', marginLeft: 12}}><b>The Pokémon Company</b></h5>
                <ul>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>What's New</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>Pokemon Parents Guide</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>Customer Service</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>About Our Company</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>Pokemon Careers</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>Select a Country/Region</b></li>
                    <li onMouseOver={mouseOver} onMouseOut={mouseOut}><b>Pokemon Press Site</b></li>
                </ul>
            </div>
            <div className="vertLine"></div>
            <div className="socials">
                <a className='socialIcons' href="https://www.facebook.com/matt.joga"><img className='socialIcons' style={{cursor: 'pointer'}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" alt="" /></a>
                <a className='socialIcons' href="https://www.linkedin.com/in/matt-joga-766a03141/"><img className='socialIcons' style={{cursor: 'pointer'}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt=""/></a>
                <a className='socialIcons' href="https://www.github.com/JogaMatt"><img className='socialIcons' style={{cursor: 'pointer'}} src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-128.png" alt="" /></a>
                <a className='socialIcons' href="https://www.pokemon.com/us/"><img className='socialIcons' style={{cursor: 'pointer'}} src="https://cdn1.iconfinder.com/data/icons/the-games/512/pokeball-128.png" alt="" /></a>
            </div>
            <div className="vertLine"></div>
            <div className="logo">
                <a href="https://www.codingdojo.com/"><img className='logoIcon' src="data:image/png;base64,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" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Apron