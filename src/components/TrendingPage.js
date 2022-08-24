import React, { useState, useEffect } from 'react'
import axios from 'axios';

const TrendingPage = () => {
    const[trending, setTrending] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins);
        });
    }, []);

  return (
    <div className='trending'>
    {trending.map((coin, idx) => (
        <div className='trending-card'>
         <div key={idx} className='trending-name'>
         <img src={coin.item.small}  alt="/" />
         <div>
         <p>{coin.item.name}</p>
         <p>{coin.item.symbol}</p>
         </div>
         <div className='trending-data ms-auto'>
             <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" className="image-size" alt="/" />
             <p>{coin.item.price_btc.toFixed(7)}</p>
         </div>
         </div>
     </div>
    ))}



</div>
  )
}

export default TrendingPage