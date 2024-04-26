import React from "react";
import Link from "next/link";

function CoinCard({ id, name, symbol, rank, price }) {
  return (
    <div className="coin-card">
      <h3 className="coin-name">{name}</h3>
      <h4 className="coin-symbol">{symbol}</h4>
      <p className="coin-rank">Rank: {rank}</p>
      <p className="coin-price">Price: {price}</p>
      <Link className="view-details-link" href={`/coins/${id}`}>
        View Details
      </Link>
    </div>
  );
}

export default CoinCard;
