import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const MainPage = () => {

  const overBackground = (e) => {
    e.target.style.boxShadow = '10px 10px 10px #03b7db'
    e.target.style.marginTop = '-30px'
  }

  const leaveBackground = (e) => {
      e.target.style.boxShadow = ''
      e.target.style.marginTop = ''
  }

  
  return (
    <div id='containerMain'>
      <div className="video" style={{display: 'flex', justifyContent: 'center', backgroundColor: 'black'}}>
      <video autoPlay loop muted src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/header/en-us/brilliant-stars-large.mp4"></video>
      </div>
      <div className="dividerBig" style={{width: 'inherit', height: 30 ,backgroundColor: '#fdf4f8'}}></div>
      <main className="bottomMain">
        <div style={{margin: 'auto', width: 600, marginBottom: 15}} className="bannerImg">
          <img style={{width: 600}} src='https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/logos/en-us/swsh09-logo.png' alt="" />
        </div>
        <div className="vstar" style={{display: 'flex', justifyContent: 'center', marginTop: 215}}>
          <Link id='mainArceus' to={'/swsh9/swsh9-123'}><img className='arceus' style={{width: 400, borderRadius: 10, marginRight: 100, marginTop: -175}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_123.jpg" alt="" /></Link>
          <div className="description" style={{width: 600, marginTop: 0}}>
            <img style={{width: 300, marginLeft: 145}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/logos/en-us/vstar-logo.png" alt="" />
            <div className="divider" style={{width: 'inherit', height: 15 ,backgroundColor: '#fdf4f8'}}></div>
            <h5 style={{color: '#fdf4f8', textAlign: 'center', marginTop: 60}}>The shining stars of this Pokémon TCG expansion are undeniably the Pokémon VSTAR. Each one has a VSTAR Power, a special attack or Ability that can drastically alter the course of a battle. But choose your moment wisely, because each player can only use one VSTAR Power during the entire game!</h5>
            {/* <Link to={'/swsh9'} style={{textDecoration: 'none'}}><button id='expansionBtn' className='btn btn-dark'><em>Go to the expansion page</em></button></Link> */}
          </div>
        </div>
        <div className="dividerBig" style={{width: 'inherit', height: 30 ,backgroundColor: 'black', marginTop: -45}}></div>
        <div style={{backgroundColor: '#f6f7f7'}} className="trainerGallery">
          <div style={{display: 'flex', justifyContent: 'center'}} className="starDivider">
            <img style={{width: 750, marginTop: 40}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/star-divider.png" alt="" />
          </div>
          <div className="trainerInfo">
            <h1 style={{fontSize: 36, color: '#0a1045', fontFamily: 'serif', textAlign: 'center', marginTop: 70, marginBottom: 45, letterSpacing: -2}}><b>TRAINER GALLERY CARDS</b></h1>
            <h5 style={{width: 1200, textAlign: 'center', margin: 'auto', lineHeight: 1.5}}>Celebrate the incredible connection between Trainers and their Pokémon with the Trainer Gallery subset. Among the star Trainers are two of the Pokémon world's favorite rivals—Blue and his electrifying Jolteon, and N and Zekrom. Karen of the Elite Four also puts in an appearance with the mysterious Moonlight Pokémon, Umbreon VMAX.</h5>
            <div className="cardImg" style={{width: 1080, marginTop: 70}}>
              <Link to={'/swsh9tg/swsh9tg-TG04'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300, marginRight: 50}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_4.jpg" alt="" /></Link>
              <Link to={'/swsh9tg/swsh9tg-TG05'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300, marginRight: 50}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_5.jpg" alt="" /></Link>
              <Link to={'/swsh9tg/swsh9tg-TG23'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_23.jpg" alt="" /></Link>
            </div>
            {/* <div className="trainerButton" style={{width: 293, margin: 'auto', marginTop: 45}}>
              <Link to={'/swsh9tg'} style={{textDecoration: 'none'}}><button className='btn btn-dark'><em>Go to the expansion page</em></button></Link>
            </div> */}
          </div>
        </div>
      </main>
      <div className="stars_container">
            <div className="star star-1" style={{width: 5, height: 5}}></div>
            <div className="star star-2" style={{width: 4, height: 4}}></div>
            <div className="star star-3" style={{width: 3, height: 3}}></div>
            <div className="star star-4" style={{width: 2, height: 2}}></div>
            <div className="star star-5" style={{width: 5, height: 5}}></div>
            <div className="star star-6" style={{width: 2, height: 2}}></div>
            <div className="star star-7" style={{width: 4, height: 4}}></div>
            <div className="star star-8" style={{width: 5, height: 5}}></div>
            <div className="star star-9" style={{width: 2, height: 2}}></div>
            <div className="star star-10" style={{width: 3, height: 3}}></div>
            <div className="star star-11" style={{width: 4, height: 4}}></div>
            <div className="star star-12" style={{width: 2, height: 2}}></div>
            <div className="star star-13" style={{width: 3, height: 3}}></div>
            <div className="star star-14" style={{width: 4, height: 4}}></div>
            <div className="star star-15" style={{width: 2, height: 2}}></div>
            <div className="star star-16" style={{width: 5, height: 5}}></div>
            <div className="star star-17" style={{width: 2, height: 2}}></div>
            <div className="star star-18" style={{width: 4, height: 4}}></div>
            <div className="star star-19" style={{width: 2, height: 2}}></div>
            <div className="star star-20" style={{width: 5, height: 5}}></div>
            <div className="star star-21" style={{width: 4, height: 4}}></div>
            <div className="star star-22" style={{width: 2, height: 2}}></div>
            <div className="star star-23" style={{width: 3, height: 3}}></div>
            <div className="star star-24" style={{width: 4, height: 4}}></div>
            <div className="star star-25" style={{width: 5, height: 5}}></div>
            <div className="star star-26" style={{width: 5, height: 5}}></div>
            <div className="star star-27" style={{width: 4, height: 4}}></div>
            <div className="star star-28" style={{width: 3, height: 3}}></div>
            <div className="star star-29" style={{width: 2, height: 2}}></div>
            <div className="star star-30" style={{width: 5, height: 5}}></div>
            <div className="star star-31" style={{width: 2, height: 2}}></div>
            <div className="star star-32" style={{width: 4, height: 4}}></div>
            <div className="star star-33" style={{width: 5, height: 5}}></div>
            <div className="star star-34" style={{width: 2, height: 2}}></div>
            <div className="star star-35" style={{width: 3, height: 3}}></div>
            <div className="star star-36" style={{width: 4, height: 4}}></div>
            <div className="star star-37" style={{width: 2, height: 2}}></div>
            <div className="star star-38" style={{width: 3, height: 3}}></div>
            <div className="star star-39" style={{width: 4, height: 4}}></div>
            <div className="star star-40" style={{width: 2, height: 2}}></div>
            <div className="star star-41" style={{width: 5, height: 5}}></div>
            <div className="star star-42" style={{width: 2, height: 2}}></div>
            <div className="star star-43" style={{width: 4, height: 4}}></div>
            <div className="star star-44" style={{width: 2, height: 2}}></div>
            <div className="star star-45" style={{width: 5, height: 5}}></div>
            <div className="star star-46" style={{width: 4, height: 4}}></div>
            <div className="star star-47" style={{width: 2, height: 2}}></div>
            <div className="star star-48" style={{width: 3, height: 3}}></div>
            <div className="star star-49" style={{width: 4, height: 4}}></div>
            <div className="star star-50" style={{width: 5, height: 5}}></div>
            <div className="star star-51" style={{width: 5, height: 5}}></div>
            <div className="star star-52" style={{width: 4, height: 4}}></div>
            <div className="star star-53" style={{width: 3, height: 3}}></div>
            <div className="star star-54" style={{width: 2, height: 2}}></div>
            <div className="star star-55" style={{width: 5, height: 5}}></div>
            <div className="star star-56" style={{width: 2, height: 2}}></div>
            <div className="star star-57" style={{width: 4, height: 4}}></div>
            <div className="star star-58" style={{width: 5, height: 5}}></div>
            <div className="star star-59" style={{width: 2, height: 2}}></div>
            <div className="star star-60" style={{width: 3, height: 3}}></div>
            <div className="star star-61" style={{width: 4, height: 4}}></div>
            <div className="star star-62" style={{width: 2, height: 2}}></div>
            <div className="star star-63" style={{width: 3, height: 3}}></div>
            <div className="star star-64" style={{width: 4, height: 4}}></div>
            <div className="star star-65" style={{width: 2, height: 2}}></div>
            <div className="star star-66" style={{width: 5, height: 5}}></div>
            <div className="star star-67" style={{width: 2, height: 2}}></div>
            <div className="star star-68" style={{width: 4, height: 4}}></div>
            <div className="star star-69" style={{width: 2, height: 2}}></div>
            <div className="star star-70" style={{width: 5, height: 5}}></div>
            <div className="star star-71" style={{width: 4, height: 4}}></div>
            <div className="star star-72" style={{width: 2, height: 2}}></div>
            <div className="star star-73" style={{width: 3, height: 3}}></div>
            <div className="star star-74" style={{width: 4, height: 4}}></div>
            <div className="star star-75" style={{width: 5, height: 5}}></div>
            <div className="star star-76" style={{width: 5, height: 5}}></div>
            <div className="star star-77" style={{width: 4, height: 4}}></div>
            <div className="star star-78" style={{width: 3, height: 3}}></div>
            <div className="star star-79" style={{width: 2, height: 2}}></div>
            <div className="star star-80" style={{width: 5, height: 5}}></div>
            <div className="star star-81" style={{width: 2, height: 2}}></div>
            <div className="star star-82" style={{width: 4, height: 4}}></div>
            <div className="star star-83" style={{width: 5, height: 5}}></div>
            <div className="star star-84" style={{width: 2, height: 2}}></div>
            <div className="star star-85" style={{width: 3, height: 3}}></div>
            <div className="star star-86" style={{width: 4, height: 4}}></div>
            <div className="star star-87" style={{width: 2, height: 2}}></div>
            <div className="star star-88" style={{width: 3, height: 3}}></div>
            <div className="star star-89" style={{width: 4, height: 4}}></div>
            <div className="star star-90" style={{width: 2, height: 2}}></div>
            <div className="star star-91" style={{width: 5, height: 5}}></div>
            <div className="star star-92" style={{width: 2, height: 2}}></div>
            <div className="star star-93" style={{width: 4, height: 4}}></div>
            <div className="star star-94" style={{width: 2, height: 2}}></div>
            <div className="star star-95" style={{width: 5, height: 5}}></div>
            <div className="star star-96" style={{width: 4, height: 4}}></div>
            <div className="star star-97" style={{width: 2, height: 2}}></div>
            <div className="star star-98" style={{width: 3, height: 3}}></div>
            <div className="star star-99" style={{width: 4, height: 4}}></div>
            <div className="star star-100" style={{width: 5, height: 5}}></div>
        </div>
    </div>
  )
}

export default MainPage