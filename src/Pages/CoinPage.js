import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import './CoinPage.css';
import { Typography } from '@mui/material';
import parse from 'html-react-parser';
import { numberWithCommas } from '../components/CoinsTable';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (error) {
      console.error('Error fetching coin data:', error);
    }
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="container">
      <div className="sidebar">
        {coin && (
          <>
            <img
              src={coin.image.large}
              alt={coin.name}
              height="200"
              style={{ marginBottom: 20 }}
            />
            <Typography variant="h3" className="heading">
              {coin.name}
            </Typography>
            <Typography variant="subtitle1" className="description">
              {parse(coin.description.en.split(". ")[0])}.
            </Typography>
            <div className="marketData">
              <span style={{ display: "flex" }}>
                <Typography variant="h5" className="heading">
                  Rank:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {numberWithCommas(coin.market_cap_rank)}
                </Typography>
              </span>

              <span style={{ display: "flex" }}>
                <Typography variant="h5" className="heading">
                  Current Price:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {symbol}{" "}
                  {numberWithCommas(
                    coin.market_data.current_price[currency.toLowerCase()]
                  )}
                </Typography>
              </span>

              <span style={{ display: "flex" }}>
                <Typography variant="h5" className="heading">
                  Market Cap:
                </Typography>
                &nbsp; &nbsp;
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {symbol}{" "}
                  {numberWithCommas(
                    coin.market_data.market_cap[currency.toLowerCase()]
                      .toString()
                      .slice(0, -6)
                  )}
                  M
                </Typography>
              </span>
            </div>
          </>
        )}
      </div>
      
    </div>
  );
};

export default CoinPage;
