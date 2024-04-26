// /app/page.js
'use client';
import React, { useState, useEffect } from 'react';
import CoinCard from './components/CoinCard';
import './styles.css';

function Home() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        // Fetch the top 20 cryptocurrencies
        async function fetchCoins() {
            try {
                const response = await fetch('https://api.coinlore.net/api/tickers/');
                const data = await response.json();
                if (response.ok) {
                    setCoins(data.slice(0, 20)); // Get the top 20 coins
                } else {
                    console.error('Failed to fetch coins');
                }
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        }
        fetchCoins();
    }, []);

    return (
        <div className='home'>
            <h1>Top 20 Cryptos</h1>
            <div className='coins-container'>
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    );
}

export default Home;
