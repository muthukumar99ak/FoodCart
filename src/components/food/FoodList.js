
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Cart from "../cart/Cart";
import Food from "./Food";
import './food.css';

const FoodList = (props) => {
    return (
        <div>
            <Header searchFoods={props.searchFoods} />
            <div className='container pt-4'>
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='subHeading'>Foods</h5>
                        <p className='foodLength'>{props.foods.length} items</p>
                    </div>
                    {props.noRecord ? <div className='col-8 mt-5'><h5 className='text-center text-dark'>No record found</h5></div> : null}

                    <div className='col-8'><div className='row'>{props.foods.map(food => {
                        return <Food key={food.id} food={food} />
                    })}
                    </div></div>

                    <div className='col-4'>
                        <Cart />
                        <Link to='/checkout' className='btn btn-success w-100'>Checkout</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FoodList;