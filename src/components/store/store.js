import { createStore } from "redux";

const initialState = {
    total: 0,
    foodItems: []
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FOOD":
            let copyFood = { ...state };
            let isSame = copyFood.foodItems.find(item => item.id === action.value.id)
            if (isSame) {
                isSame.count = isSame.count + 1
                isSame.total = isSame.total + action.value.price
                copyFood.total = copyFood.total + action.value.price
            } else {
                copyFood.foodItems.push({
                    id: action.value.id,
                    foodName: action.value.foodname,
                    total: action.value.price,
                    price: action.value.price,
                    count: 1
                })
                copyFood.total = state.total + action.value.price
            }
            return { ...copyFood }
        case "DE_QUAN":
            let foodCopy = { ...state };
            let filterdFood = foodCopy.foodItems.find(item => item.id === action.value.id)
            if (filterdFood.count > 1) {
                filterdFood.count = filterdFood.count - 1
                filterdFood.total = filterdFood.total - action.value.price
                foodCopy.total = foodCopy.total - filterdFood.price
            } else {
                filterdFood.count = filterdFood.count - 1
                filterdFood.total = filterdFood.total - action.value.price
                foodCopy.total = foodCopy.total - filterdFood.price
                foodCopy.foodItems = foodCopy.foodItems.filter(item => item.id !== action.value.id)
                // foodCopy.totalQuan = foodCopy.items.length
            }
            return { ...foodCopy }
    }

    return state;
}

const store = createStore(foodReducer);

export default store;