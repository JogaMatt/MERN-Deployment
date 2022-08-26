import React, {useState, useEffect} from 'react'
import {Outlet, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './style.css'
import Apron from './Apron'

const Form = (props) => {
    // SET FOR KEEPING TRACK OF FORM PARAMS
    const [pokemonSet, setPokemonSet] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [allSets, setAllSets] = useState([])

    // CALL THE useNavigate FUNCTION
    const navigate = useNavigate()

    // POKEMON API
    const api = 'https://api.pokemontcg.io/v2/sets'

    const searchAPI = (e) => {
        e.preventDefault();
        navigate(`/${pokemonSet}`)
    }

    const searchPokemonAPI = (e) => {
        e.preventDefault();
        navigate(`/card/${pokemon}`)
    }

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setAllSets(res.data.data)
            })
            .catch(err => err.json())
    }, [])

  return (
      <div id="navBar">
          <div id='centerMe'>
              <div className="forms">
                <form onClick={searchAPI}>
                        <select className='browser-default custom-select' name="" id="dropdown"
                        onChange={(e) =>{
                            const selectedOption = e.target.value;
                            setPokemonSet(selectedOption);
                        }}>
                            <option value={'/'}>--Select an Pokemon Set--</option>
                            {allSets.map((set, i) => {
                                return <option key={i} value={set.id}>{set.name}</option>
                            })}
                        </select>
                </form>
                <form onSubmit={searchPokemonAPI}>
                    <input type="text" onChange={(e) => setPokemon(e.target.value.replace(/\s/g, '*') + '*')}/>
                </form>
              </div>
              <div className="black">
                    <Link to={'/'} id='myCollection' style={{color: 'white', textDecoration: 'none', fontSize: 20, marginBottom: 5, marginLeft: 115}}><b>Home</b></Link>
                  <Link to={'/myCards'} id='myCollection' style={{color: 'white', textDecoration: 'none', fontSize: 20, marginBottom: 5}}><b>My Collection</b></Link>
              </div>
            <Outlet/>
          </div>
          <br/>
          {/* <br/> */}
      </div>
    
  )
}

export default Form