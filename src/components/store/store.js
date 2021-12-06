import { createStore } from "redux";

const initialState = {
    total: 0,
    foodItems: []
}

const foodReducer = (state = initialState, actions) => {
    if (actions.type === "ADD_FOOD") {
        let copyFood = state.foodItems.slice();
        copyFood.push(actions.value);
        return {
            ...state, foodItems: copyFood
        }
    }
    return state;
}

const store = createStore(foodReducer);

export default store;