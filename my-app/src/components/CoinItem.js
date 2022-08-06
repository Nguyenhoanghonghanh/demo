import React from 'react'
import '../components/Coins.css'
const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p className='rank'>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p className='coin-price'>${props.coins.current_price.toLocaleString()}</p>
        <p className='coin-24h'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='coin-volume'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='coin-market'>${props.coins.market_cap.toLocaleString()}</p>
        <button className='coin-trade'>Trade</button>
    </div>
  )
}

export default CoinItem