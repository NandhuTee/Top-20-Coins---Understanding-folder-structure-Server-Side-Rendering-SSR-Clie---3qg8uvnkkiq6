// /app/[coinId]/page.js
'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import './CoinDetail.css';

function CoinDetail() {
    const { coinId } = useParams(); // Extract coin ID from the URL
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        // Fetch coin details using coin ID from the URL
        async function fetchCoin() {
            try {
                const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${coinId}`);
                const data = await response.json();
                if (response.ok) {
                    setCoin(data[0]);
                } else {
                    console.error('Failed to fetch coin details');
                }
            } catch (error) {
                console.error('Error fetching coin details:', error);
            }
        }
        fetchCoin();
    }, [coinId]);

    if (!coin) return <div>Loading...</div>;

    return (
        <div className='coin-detail'>
            <div className='name-symbol'>
                <h1 className='name'>{coin.name}</h1>
                <h2 className='symbol'>({coin.symbol})</h2>
            </div>
            <div class='market-description'>
                <p className='coin-rank'>Rank: {coin.rank}</p>
                <p className='coin-price'>Price: ${coin.price_usd}</p>
                <p className='coin-market-cap'>Market Cap: ${coin.market_cap_usd}</p>
                <p className='coin-total-supply'>Total Supply: {coin.tsupply}</p>
                <p className='coin-max-supply'>Max Supply: {coin.msupply || 'N/A'}</p>
            </div>
        </div>
    );
}

export default CoinDetail;
