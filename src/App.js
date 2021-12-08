import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import FoodList from './components/food/FoodList';

import { foodList } from './components/foodListJSON';
import { Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';


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
      {/* <FoodList foods={foods} noRecord={noRecord} /> */}
      <main>
        <Routes>
          <Route path='/' element={<FoodList foods={foods} noRecord={noRecord} searchFoods={searchFoods} />} />
          <Route path='/checkout' element={<Cart from='route' />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
