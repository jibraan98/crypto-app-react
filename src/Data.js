import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Sparklines, SparklinesLine  } from 'react-sparklines';

const Data = () => {

  const[coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
  }, [url]);

  return (
    <div className='table-data'>
    <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th></th>
          <th>Price</th>
          <th>24hr</th>
          <th>24hr Volume</th>
          <th>Mkt</th>
          <th>Last 7 days</th>
        </tr>
      </thead>
      {coins.map((coin, idx) => (
          <tbody>
          <tr>
            <td><p>{idx + 1}</p></td>
            <td>{coin.name}</td>
            <td>{coin.symbol.toUpperCase()}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td>
              {coin.price_change_percentage_24h > 0 ? (
                <p className='positive-percentage'>
                +{coin.price_change_percentage_24h.toFixed(2)}%
              </p>
             ) : (
                <p className='negative-percentage'>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
             )}
            </td>
            <td>${coin.total_volume.toLocaleString()}</td>
            <td>${coin.market_cap.toLocaleString()}</td>
            <td>
            <Sparklines data={coin.sparkline_in_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
              </td>
          </tr>
          
        </tbody>
        ))}
      
    </Table>
    </div>
  )
}

export default Data