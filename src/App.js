import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import FoodList from './components/food/FoodList';

import { foodList } from './components/foodListJSON';
import { useSelector } from 'react-redux';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [noRecord, setNoRecord] = useState(false)

  const searchFoods = (e) => {
    let curValue = e.target.value;
    let filteredFoods = foodList.filter(food => food.foodname.toLowerCase().includes(curValue.toLowerCase()))
    filteredFoods.length === 0 ? setNoRecord(true) : setNoRecord(false)
    setFoods(filteredFoods)
  }

  return (
    <div>
      <Header searchFoods={searchFoods} />
      <FoodList foods={foods} noRecord={noRecord} />
    </div>
  );
}

export default App;
