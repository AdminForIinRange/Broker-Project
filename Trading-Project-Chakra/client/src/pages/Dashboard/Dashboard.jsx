import React, { useState, useEffect } from 'react';

const PriceTracker = () => {
  const [prices, setPrices] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0); // Assuming initial price is 0

  const getRandomPrice = () => {
    return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
  };

  // Simulating price updates every 5 seconds
  useEffect(() => {
    const priceUpdateInterval = setInterval(() => {
      const updatedPrice = getRandomPrice();
      setCurrentPrice(updatedPrice);
    }, 50);

    return () => clearInterval(priceUpdateInterval);
  }, []);

  const handlePriceUpdate = () => {
    if (prices.length === 0 || currentPrice > prices[prices.length - 1]) {
      setPrices(prevPrices => [...prevPrices, currentPrice]);
    }
  };

  useEffect(() => {
    handlePriceUpdate();
  }, [currentPrice]);

  return (
    <div>
      <h1>Current Price: {currentPrice}</h1>
      <h2>Price History:</h2>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceTracker;
