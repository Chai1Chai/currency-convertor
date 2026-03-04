import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] =  React.useState('RUB');
  const [toCurrency, setToCurrency] =  React.useState('USD');
  const [fromPrice, setFromPrice] =  React.useState(0);
  const [toPrice, setToPrice] =  React.useState(0);
  const [conversion_rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/4f9f861f549296e372c9a74d/latest/USD")
    .then((res) => res.json())
    .then((json) => {
      setRates(json.conversion_rates);
      console.log(json.conversion_rates)
    }).catch(err => {
      console.warn(err);
      alert('Не удалось получить данные');
    })
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / conversion_rates[fromCurrency];
    const result = price * conversion_rates[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  }

  const onChangeToPrice = (value) => {
    const result = (conversion_rates[fromCurrency] / conversion_rates[toCurrency] * value);
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  }

  React.useEffect(() =>{
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  React.useEffect(() =>{
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} 
      onChangeCurrency={setFromCurrency} 
      onChangeValue={onChangeFromPrice}
      />
      <Block value={toPrice} currency={toCurrency} 
      onChangeCurrency={setToCurrency} 
      onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;
