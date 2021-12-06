import { useState } from "react";
import Food from "./Food";
import './food.css';

const FoodList = (props) => {
    return (
        <div className='container pt-4'>
            <div className='row'>
                <div className='col-12'>
                    <h5 className='subHeading'>Foods</h5>
                    <p className='foodLength'>{props.foods.length} items</p>
                </div>
                {props.noRecord ? <div className='col-12 mt-5'><h5 className='text-center text-dark'>No record found</h5></div> : null}
                {props.foods.map(food => {
                    return <Food key={food.id} food={food} />
                })}
            </div>
        </div>
    )
}

export default FoodList;