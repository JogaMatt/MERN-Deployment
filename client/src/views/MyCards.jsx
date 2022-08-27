import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MyCards = () => {
  const [myCards, setMyCards] = useState([])
  const pageSize = 15
  const [currentPage, setCurrentPage] = useState(1)
  const myCardsAPI = 'mongodb+srv://JogaMatt:LilMan315@cluster0.zzixcng.mongodb.net/?retryWrites=true&w=majority/api/myCards'

  const pageLimit = Math.ceil(myCards.length / pageSize)
  const nextPage = () => {
      if(currentPage < pageLimit){
          setCurrentPage(currentPage + 1)
      }
      else{
          console.log("You're at the last page!")
      }
  }
  const prevPage = () => {
      if(currentPage > 1){
          setCurrentPage(currentPage - 1)
      }
      else{
          console.log("You're at the first page!")
      }
  }



  useEffect(() => {
    axios.get(myCardsAPI)
      .then(res => setMyCards(res.data))
      .catch(err => console.log(err))
  }, [myCardsAPI])

  const overBackground = (e) => {
    e.target.style.boxShadow = '10px 10px 10px #1e1077'
    e.target.style.marginTop = '-1px'
  }

  const leaveBackground = (e) => {
      e.target.style.boxShadow = ''
      e.target.style.marginTop = ''
  }

  console.log(myCards)
  return (
    <div id='container'>
      <div id="pokemonCard">
          {
            myCards
            ?
            myCards.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((card, i) => {
              return <Link id='linkCards' key={i} to={`/${card.pokeSet}/${card.cardId}`}><img  onMouseOver={overBackground} onMouseLeave={leaveBackground} id='card' src={card.image} alt="" /></Link>
            })
            :
            console.log("Loading...")
          }
          <div style={{display: 'flex'}} id="buttons">
            <div style={{height: 45.5, width: 44, backgroundColor: 'black', borderTopLeftRadius: 5, borderBottomLeftRadius: 5}} className='prev' onClick={prevPage}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRbNmCyC-wFLrolAnUdBlVO8NDC9BC9ij4Q&usqp=CAU' className='leftArrow' style={{width: 30, marginTop: 7.5, marginLeft: 7, cursor: 'pointer'}}></img></div>
            <div style={{height:45.5, width: 125, backgroundColor: '#231f20'}} className='currentPage'>{currentPage} of {pageLimit}</div>
            <div style={{height: 45.5, width: 44, backgroundColor: 'black', borderTopRightRadius: 5, borderBottomRightRadius: 5}} className='next' onClick={nextPage}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRbNmCyC-wFLrolAnUdBlVO8NDC9BC9ij4Q&usqp=CAU' className='rightArrow' style={{width: 30, marginTop: 7.5, marginLeft: 7, cursor: 'pointer'}}></img></div>
        </div>
        <div style={{height: 500}}></div>
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

export default MyCards