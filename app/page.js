'use client'
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';

function Home() {
    const [coins, setCoins] = useState([]);

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard />
                ))}
            </div>
        </div>
    )
}

export default Home