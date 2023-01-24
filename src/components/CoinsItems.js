import React from 'react'
import './Coin.css'


const CoinsItems = ({coin}) => {
  return (
    <div className='coin-row'>
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={coin.image} alt="" />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed()}%</p>
      <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinsItems
