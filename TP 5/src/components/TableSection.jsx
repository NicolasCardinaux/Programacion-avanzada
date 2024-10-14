import React, { useEffect, useState } from 'react';
import axios from 'axios';
import trendingDown from '../assets/icons/trending-down.svg';
import trendingUp from '../assets/icons/trending-up.svg';

const TableSection = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100')
      .then(response => {
        setCryptos(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching the data: ", error);
      });
  }, []);

  return (
    <section className="main-table-container">
      <div className="main-currency-table">
        <p className="currency-table--title">Monedas:</p>
        <div className="currency-table--container">
          <table>
            <tbody>
              {cryptos.map((crypto) => (
                <tr key={crypto.id}>
                  <td className="table__top-left">{crypto.name} ({crypto.symbol})</td>
                  <td className="table__top-right table__right">
                    ${parseFloat(crypto.price_usd).toFixed(2)}
                    {parseFloat(crypto.percent_change_24h) < 0 ? (
                      <span className="down" style={{ backgroundImage: `url(${trendingDown})` }}></span>
                    ) : (
                      <span className="up" style={{ backgroundImage: `url(${trendingUp})` }}></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="currency-table--date">
          <p><b>Última Actualización:</b> {new Date().toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
