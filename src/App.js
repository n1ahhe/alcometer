import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

function handleSubmit(e){
  e.preventDefault();
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsleft = grams - (burning * time);
  let alkohol = 0;
  if (gender === "male") {
    alkohol =  gramsleft / (weight * 0.7); 
  }
  else {
  alkohol = gramsleft / (weight * 0.6);
  }
  setResult(alkohol);

  
}
  
  return (
    <>
    
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name='weight' type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)} ></input>
          </div>
        <div>
        <label>Bottles</label>
        <select name='bottles' type='number' step='1' value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            </select>
        </div>
        <div>
        <label>Time</label>
        <select name='time' type='number' step='1' value={time} onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            </select>
        </div>
        <div>
        <label> Gender</label>
        <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type='radio' name='gender' value='female' defaultChecked onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
        </form>
      </>
    
  );
}
  

export default App;
