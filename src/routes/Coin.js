import React from "react";
import { useEffect } from "react";
import { fetchCoinInfo } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { coinInfo } = useSelector((state) => {
    return state.cryptoInfo;
  });
  useEffect(() => {
    dispatch(fetchCoinInfo({ params }));
  }, [dispatch, params]);
  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coinInfo.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank #{coinInfo.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coinInfo.image ? (
                <img src={coinInfo.image.small} alt="" />
              ) : null}
              <p>{coinInfo.name}</p>
             {coinInfo.symbol? <p>{coinInfo.symbol.toUpperCase()}</p>:null}
            </div>
            <div className="coin-price">
              {coinInfo.market_data?.current_price?<h1>${coinInfo.market_data.current_price.usd.toLocaleString()}</h1>:null}
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coinInfo.market_data?.price_change_percentage_1h_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_1h_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_24h_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_24h_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_7d_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_7d_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_14d_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_14d_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_30d_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_30d_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_1y_in_currency
                      ?
                    <p>{coinInfo.market_data.price_change_percentage_1y_in_currency
                    .usd.toFixed(1)}</p> :null
                  }
                </td>
               
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coinInfo.market_data?.low_24h?<p>${coinInfo.market_data.low_24h.usd.toLocaleString()}</p>:null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coinInfo.market_data?.high_24h? <p>${coinInfo.market_data.high_24h.usd.toLocaleString()}</p>:null}
              </div>
            </div>
            <div className="right">
            <div className="row">
                <h4>Market Cap</h4>
                {coinInfo.market_data? <p>${coinInfo.market_data.market_cap.usd.toLocaleString()}</p>:null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coinInfo.market_data? <p>{coinInfo.market_data.circulating_supply}</p>:null}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
__html:DOMPurify.sanitize(coinInfo.description?coinInfo.description.en:'')
            }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
