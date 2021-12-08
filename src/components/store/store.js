import { createStore } from "redux";

const initialState = {
    total: 0,
    foodItems: []
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FOOD":
            let copyFood = { ...state };
            let isSame = copyFood.foodItems.find(item => item.product_id === action.value.product_id)
            if (isSame) {
                isSame.count = isSame.count + 1
                isSame.total = isSame.total + action.value.product_price[0].product_price
                copyFood.total = copyFood.total + action.value.product_price[0].product_price
            } else {
                copyFood.foodItems.push({
                    product_id: action.value.product_id,
                    foodName: action.value.product_name,
                    total: action.value.product_price[0].product_price,
                    product_price: [{
                        product_price: action.value.product_price[0].product_price
                    }],
                    count: 1
                })
                copyFood.total = state.total + action.value.product_price[0].product_price
            }
            return { ...copyFood }
        case "DE_QUAN":
            let foodCopy = { ...state };
            let filterdFood = foodCopy.foodItems.find(item => item.product_id === action.value.product_id)
            if (filterdFood.count > 1) {
                filterdFood.count = filterdFood.count - 1
                filterdFood.total = filterdFood.total - action.value.product_price[0].product_price
                foodCopy.total = foodCopy.total - action.value.product_price[0].product_price
            } else {
                filterdFood.count = filterdFood.count - 1
                filterdFood.total = filterdFood.total - action.value.product_price[0].product_price
                foodCopy.total = foodCopy.total - action.value.product_price[0].product_price
                foodCopy.foodItems = foodCopy.foodItems.filter(item => item.product_id !== action.value.product_id)
                // foodCopy.totalQuan = foodCopy.items.length
            }
            return { ...foodCopy }

        default:
            return state;
    }
}

const store = createStore(foodReducer);

export default store;