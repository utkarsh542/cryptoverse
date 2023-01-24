import React from "react";
import "./Coin.css";
import { useEffect } from "react";
import { useState } from "react";
import CoinsItems from "./CoinsItems";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import axios from "axios";
const Coins = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [cryptocoins, setCryptoCoins] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCryptoCoins(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {cryptocoins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinsItems coin={coin} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
