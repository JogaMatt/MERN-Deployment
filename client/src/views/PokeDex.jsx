import React, {useState, useEffect} from 'react'
import './style.css'
import { useParams, Link } from 'react-router-dom'
import {AiFillQuestionCircle, AiOutlineClose} from 'react-icons/ai'
import axios from 'axios'

const PokeDex = () => {
  const {lowerName} = useParams()
  const [pokeEntry, setPokeEntry] = useState([])
  const [dexInfo, setDexInfo] = useState([])
  const [descState, setDescState] = useState(false)
  const pokeDexAPI = `https://pokeapi.co/api/v2/pokemon/${lowerName}`
  const dexId = pokeEntry.id
  const nationalDexAPI = `http://localhost:8000/api/pokedex/${dexId}`
  let upperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)

  useEffect(() => {
    axios.get(pokeDexAPI)
      .then(res => {
        setPokeEntry(res.data)
      })
      .catch(err => console.log(err))
    axios.get(nationalDexAPI)
      .then(res => {
        console.log(res.data)
        setDexInfo(res.data)
      })
  }, [pokeDexAPI, nationalDexAPI])

  const displayDesc = () => {
    setDescState(true)
    console.log(descState)
  }

  const closeDesc = () => {
    setDescState(false)
  }

  if(dexInfo === null){
    return (
      <div id='container'>
        <div className="dexDisplay">
          <div className="errorCode">
            <h1>404</h1>
            <p className='page-not-found'>Page Not Found</p>
            <p className="message">Sorry, the page you requested could not be found</p>
          </div>
        </div>
      </div>
    )
  } else {
  
    return (
      <div id='container'>
        <div className="dexDisplay">
          <h1 style={{textAlign: 'center', fontFamily: 'revert', marginBottom: 60}}>{upperName} #{pokeEntry.id}</h1>
          <div className="dexBox">
            <div className="leftDex">
              {
                dexInfo 
                ?
                <img className='dexImg' src={dexInfo.image} alt="pokemon_image" />
                :
                null
              }
              <div className="stats">
                <ul className='statList'>
                {
                  pokeEntry.stats
                  ?
                    pokeEntry.stats.map((stat, i) => {
                      return <li className='baseStat' key={i} style={{height: stat.base_stat}}></li>
                  })
                  :
                  null
                }
                </ul>
                <div className="statAtt" style={{display: 'flex'}}>
                {
                  pokeEntry.stats 
                  ?
                    pokeEntry.stats.map((statName, i) => {
                      return <div key={i} className={statName.stat.name}>
                        <p style={{fontSize: 13}}><b>{statName.stat.name}</b></p>
                        </div>
                  })
                  :
                  null
                }
                </div>
              </div>
            </div>
            <div className="rightDex">
              <h5>{dexInfo.text}</h5>
              <div className="dexStats" style={{position: 'absolute', top: 400}}>
                <div className="dexStatsLeft">
                  <div className="height" style={{marginBottom: 50}}>
                    <h5 style={{color: 'white'}}>Height</h5>
                    <h4>{dexInfo.height}"</h4>
                  </div>
                  <div className="weight">
                    <h5 style={{color: 'white'}}>Weight</h5>
                    <h4>{dexInfo.weight}lbs</h4>
                  </div>
                </div>
                <div className="dexStatsRight">
                  <div className="category" style={{marginBottom: 50}}>
                    <h5 style={{color: 'white'}}>Category</h5>
                    <h4>{dexInfo.category} Pokémon</h4>
                  </div>
                  <div className="abilities">
                    <h5 style={{color: 'white'}}>Abilities</h5>
                    {
                      dexInfo.abilities
                      ?
                      <div className="abilityName" style={{display: 'flex'}}>
                        <h4>{dexInfo.abilities.name}</h4>
                        <AiFillQuestionCircle size={20} style={{cursor: 'pointer'}} onClick={displayDesc}/>
                      </div>
                      :
                      null
                    }
                  </div>
                </div>
              </div>
              {descState && 
                <div className='abilityInfo' style={{backgroundColor: '#313131', position: 'absolute', top: 400, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, paddingRight: 20}}>
                  <div className="top" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h6 style={{color: '#616161', marginBottom: 20}}><b>Ability Info</b></h6>
                    <AiOutlineClose size={20} onClick={closeDesc} style={{color: 'red', cursor: 'pointer'}}/>
                    {/* <h6  style={{color: 'white', letterSpacing: 1, textDecoration: 'underline', cursor: 'pointer'}}><b>Close</b></h6> */}
                  </div>
                  <h4 style={{color: 'white'}}><b>{dexInfo.abilities.name}</b></h4>
                  <h6 style={{color: 'white'}}>{dexInfo.abilities.desc}</h6>
                </div>}
              <div className="type_weakness">
                <div className="types">
                  <h4><b>Types</b></h4>
                  <div className="displayTypes">
                  {
                    dexInfo.type 
                    ?
                    dexInfo.type.map((type, i) => {
                      return <Link id='typeLink' to={`/type/${type}`}><div key={i} className={`type-${type}`} style={{color: 'white', textAlign: 'center', fontSize: 20, letterSpacing: 1, marginTop: 15, marginRight: 5}}>{type}</div></Link>
                    })
                    :
                    null
                  }
                  </div>
                </div>
                <div className="weaknesses" style={{marginTop: 20}}>
                  <h4><b>Weaknesses</b></h4>
                  <div className="displayWeaknesses">
                  {
                    dexInfo.weaknesses 
                    ?
                    dexInfo.weaknesses.map((weakness, i) => {
                      return <Link id='typeLink' to={`/type/${weakness}`}><div key={i} className={`type-${weakness}`} style={{color: 'white', textAlign: 'center', fontSize: 20, letterSpacing: 1, marginTop: 15, marginRight: 5}}>{weakness}</div></Link>
                    })
                    :
                    null
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
}

export default PokeDex