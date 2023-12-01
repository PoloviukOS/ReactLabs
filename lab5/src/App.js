import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');

        const relevantCurrencies = ['USD', 'EUR', 'GBP'];
        const filteredRates = response.data.filter((rate) => relevantCurrencies.includes(rate.cc));

        setExchangeRates(filteredRates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div className="container">
      <h1>Курси валют за останні 7 днів</h1>
      <table className="exchangeRatesTable">
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates.map((rate) => (
            <tr key={rate.cc}>
              <td>{rate.cc}</td>
              <td>{rate.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="disclaimer">На жаль, API Нацбанку України не надає історичні дані за минулі дні, а лише актуальну інформацію про фінансові показники на сучасний момент</p>
    </div>
  );
};

export default App;