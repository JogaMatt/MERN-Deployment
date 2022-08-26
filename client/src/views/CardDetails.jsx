import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const CardDetails = () => {
    const {pokeSet, cardId} = useParams()
    const [card, setCard] = useState('')
    const [myCard, setMyCard] = useState([])
    const [image, setImage] = useState('')
    const oneCardApi = `https://api.pokemontcg.io/v2/cards?q=id:${cardId}`
    const saveCardAPI = 'http://localhost:8000/api/myCards'
    const myCardAPI = `http://localhost:8000/api/myCards/${cardId}`
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(oneCardApi)
            .then(res => {
                setCard(res.data.data[0])
                setImage(res.data.data[0].images.large)
            })
        axios.get(myCardAPI)
            .then(res => 
              setMyCard(res.data))
        
    }, [oneCardApi, myCardAPI])
    
    // console.log(image)

    const saveCard = (e) => {
      e.preventDefault();
      axios.post(saveCardAPI, {
        pokeSet, cardId, image
        })
          .then(res => 
            navigate('/myCards'))
          .catch(err => console.log(err))
    }

    
    const removeCard = (myCardId) => {
      axios.delete(saveCardAPI + `/${myCardId}`)
        .then(res => {
          console.log(res)
          navigate('/myCards')
        })
        .catch(err => console.log(err))
    }
    
    var name;

    (card)
    ?
    name = card.name.split(" ")[0]
    :
    console.log('Loading...')

    if(card.name === "Galarian Mr. Mime"){
      name = "Mr-Mime"
    } else if(card.name === "Galarian Mr. Rime"){
      name = "Mr-Rime"
    } else if(name === "Farfetch'd"){
      name = name.replace("'", "")
    } else if(card.name === "Galarian Sirfetch'd" || card.name === "Galarian Farfetch'd"){
      name = card.name.split(" ")[1].replace("'", "")
    } else if(name === 'Mr.'){
      name = card.name.replace(".", "").replace(" ", "-")
    } else if(name === "Lt."){
      name = card.name.split(" ")[2]
    } else if(name === "Blaine's" || name === "Cool" || name === "Light" || name === "Brock's" || name === "Giovanni's" || name === "Koga's" || name === "Erika's" || name === "Misty's" || name === "Rocket's" || name === "Dark" || name === "Sabrina's" || name === "_____’s" || name === "_____'s" || name === "Shining" || name === "Rocket’s" || name === "Flying" || name === "Surfing" || name === "Galarian"){
      name = card.name.split(" ")[1]
    } else if(name === "M"){
      name = card.name.split(" ")[1].slice(0, -3)
    } else if(name === "Shadow" || name === "Ice" || name === "Team"){
      name = card.name.split(" ")[2]
    } else if(card.name === "Tapu Fini" || card.name === "Tapu Koko" || card.name === "Tapu Bulu" || card.name === "Tapu Lele"){
      name = card.name.replace(" ", "-")
    } else if(name === "Tapu"){
      name = card.name.slice(0, -3).replace(" ", "-")
    } else if(name === "Rapid"){
      name = "Urshifu-rapid-strike"
    } else if(name === "Single"){
      name = "Urshifu-single-strike"
    }

    let lowerName;
    (name)
    ?
    lowerName = name.toLowerCase()
    :
    console.log("Generating lowercase name...")
    console.log(card)
    
  return (
    <div id='mainPage'>
      <div id='container'>
          
          {
            (card)
            ?
            <div id="cardBox">
              <div className="leftSide">
                <img id='bigCard' src={card.images.large} alt="" /> 
                {
                  card.supertype === 'Pokémon'
                  ?
                  <Link style={{textDecoration: 'none'}} to={`/pokedex/${lowerName}`}><button className='btn btn-info' style={{marginLeft: 18,color: 'white', fontFamily: 'sans-serif'}}>Find {name} in the Pokedex</button></Link>
                  :
                  null
                }
                {
                  myCard && cardId
                  ?
                    myCard.cardId === cardId 
                    ?
                    <button className='btn btn-danger' onClick={() => removeCard(myCard._id)} style={{fontSize: 16, letterSpacing: -1, width: 240, margin: 15, marginLeft: 20}}><b>Remove from Your Collection?</b></button>
                    :
                    <form onSubmit={saveCard}>
                      <input type="hidden" value={pokeSet}/>
                      <input type="hidden" value={cardId}/>
                      <input type="hidden" value={image}/>
                      <button className='btn btn-success' style={{width: 275,color: 'white', fontFamily: 'sans-serif', marginLeft: 0, marginTop: 15, letterSpacing: -0.5}}>Add {card.name} to your Collection!</button>
                      
                    </form>
                  :
                  <form onSubmit={saveCard}>
                    <input type="hidden" value={pokeSet}/>
                    <input type="hidden" value={cardId}/>
                    <input type="hidden" value={image}/>
                    <button className='btn btn-success' style={{width: 275,color: 'white', fontFamily: 'sans-serif', marginLeft: 0, marginTop: 15, letterSpacing: -0.5}}>Add {card.name} to your Collection!</button>
                  </form>
                }
              </div>
              <div className="rightSide">
                <div className="nameBox">
                  <div className="topBox">
                    <h2 style={{letterSpacing: -2}}>{card.name}</h2>
                  </div>
                  <div className="bottomBox">
                    <div className="upper">
                      <h5><b>{card.supertype} - {card.subtypes[0]}</b></h5>
                      {
                        (card.hp)
                        ?
                        <div className="hp">
                          <h4><b>HP</b></h4>
                          <h3><b>{card.hp}</b></h3>
                          {
                            card.types
                            ?
                            card.types.map((type, i) => {
                              return <div key={i} className={`icon-${type}`} alt="" />
                            })
                            :
                            null
                          }
                        </div> : null
                      }
                      
                    </div>
                    <div className="lower">
                      {
                        (card.evolvesFrom)
                        ?
                        <h5 >Evolves From: <Link style={{textDecoration: 'none'}} to={`/card/` + card.evolvesFrom.replace(/\s/g, '*')}><b>{card.evolvesFrom}</b></Link></h5>
                        :
                        null
                      }
                    </div>
                  </div>
                </div>
                <div className="cardInfo">
                  {
                    (card.rules && card.abilities)
                    ?
                    <>
                      <p><em>{card.rules[0]}</em></p>
                      <h6><b><em><u>{card.abilities[0].type} - {card.abilities[0].name}</u></em></b></h6>
                      <p><em>{card.abilities[0].text}</em></p>
                      <br/>
                    </>
                    : 
                      (card.abilities)
                      ?
                      <>
                        <h6><b><em><u>{card.abilities[0].type} - {card.abilities[0].name}</u></em></b></h6>
                        <p><em>{card.abilities[0].text}</em></p>
                        <br/>
                      </>
                      : 
                        (card.rules)
                        ?
                        <>
                          <p><em>{card.rules[0]}</em></p>
                        </>
                        :
                        null
                  }
                  {
                    card.attacks
                    ?
                    card.attacks.map((attack, i) => {
                      return <div key={i} className="attacks">
                          <div className="upper">
                            <div className="attackCost">
                              {
                                attack.cost.map((type, i) => {
                                  return <div style={{marginLeft: 6}} key={i} className={`icon-${type}`}></div>
                                })
                              }
                              <h5 style={{marginLeft: 15}}><b>{attack.name}</b></h5>
                            </div>
                            <h5>{attack.damage}</h5>
                          </div>
                          <p><em>{attack.text}</em></p>
                          <br/>
                        </div>
                    })
                    :
                    null
                  }
                </div>
                <div className="bottomInfo">
                {
                    (card.supertype === 'Pokémon') 
                    ?
                    <div className='info'>
                      <div className="flexMe">
                        <div className="weaknessInfo">
                          <h5>Weakness</h5>
                          {
                            card.weaknesses
                            ?
                            <div className='bottomIcons'>
                              <div className={`icon-${card.weaknesses[0].type}`}/>
                              <h4>{card.weaknesses[0].value}</h4>
                            </div>
                            :
                            null
                          }
                          
                        </div>
                        <div className="weaknessInfo">
                          <h5>Resistance</h5>
                          {
                            card.resistances
                            ?
                            <div className='bottomIcons'>
                              <div className={`icon-${card.resistances[0].type}`}/>
                              <h4>{card.resistances[0].value}</h4>
                            </div>
                            :
                            null
                          }
                        </div>
                        <div className="weaknessInfo">
                          <h5>Retreat Cost</h5>
                          {
                            card.retreatCost
                            ?
                            <div className='bottomIcons'>
                              {
                                card.retreatCost.map((retreat, i) => {
                                  return <div key={i} className={`icon-${retreat}`}/>
                                })
                              }
                            </div>
                            :
                            null
                            }
                        </div>
                      </div>
                      <div className="setInfo">
                        <div className="infoLeft">
                          <h5><b><Link style={{textDecoration: 'none'}} to={`/${pokeSet}`}>{card.set.name}</Link></b></h5>
                          <h5>{card.number}/{card.set.total} <em>{card.rarity}</em></h5>
                        </div>
                        <div className="infoRight">
                            <img id='setImg' src={card.set.images.symbol} alt="" />
                        </div>
                        
                      </div>
                      
                    </div>
                    :
                    null
                  }
                    
                </div>
              </div>
            </div>
            :
            null
          }
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

export default CardDetails