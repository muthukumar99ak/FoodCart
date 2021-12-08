import { useState, useEffect } from 'react';
import './App.css';
import FoodList from './components/food/FoodList';
import { Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';


function App() {
  const [allFoods, setAllFoods] = useState([]);
  const [searchedFood, setSearchedFood] = useState(allFoods);
  const [noRecord, setNoRecord] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState('');

  useEffect(() => {
    const getVal = async () => {
      const response = await fetch('https://thebvkbiryani.org/v2/user/get_category_products.php', {
        method: "POST",
        body: JSON.stringify({
          "cat_id": "1"
        })
      });
      const data = await response.json();
      // console.log(data.GTS)
      setAllFoods(data.GTS)
      setSearchedFood(data.GTS)
      setIsLoading(false);
    }
    getVal().catch(err => {
      setError(err.message)
      throw new Error('Something went wrong')
    })
  }, [])

  const searchFoods = (e) => {
    let curValue = e.target.value;
    let copyFoods = [...allFoods]
    let filteredFoods = copyFoods.filter(food => food.product_name.toLowerCase().includes(curValue.toLowerCase()))
    filteredFoods.length === 0 ? setNoRecord(true) : setNoRecord(false)
    setSearchedFood(filteredFoods)
  }

  return (
    <div>
      {/* <FoodList foods={foods} noRecord={noRecord} /> */}
      {isLoading && !isError ?
        <div className='text-center mt-5'>
          <div className="spinner-border  text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> : <main>
          <Routes>
            <Route path='/' element={<FoodList foods={searchedFood} noRecord={noRecord} searchFoods={searchFoods} />} />
            <Route path='/checkout' element={<Cart from='route' />} />
          </Routes>
        </main>
      }

    </div>
  );
}

export default App;
