import { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const Food = (props) => {
    const [foodCount, setFoodCount] = useState(0);
    const dispatch = useDispatch()

    const increaseFoodCount = () => {
        setFoodCount(prevState => prevState + 1)
        dispatch({ type: "ADD_FOOD", value: props.food })
    }
    const decreaseFoodCount = () => {
        setFoodCount(prevState => prevState - 1)
        dispatch({ type: "DE_QUAN", value: props.food })
    }
    return (
        <div className='col-12' key={props.food.id}>
            <div className='foodCont d-flex align-items-center justify-content-between'>
                <div>
                    <p className='foodName'>{props.food.foodname}</p>
                    <p className='foodPrice'>$ {props.food.price}</p>
                </div>
                <div className='pos-relative'>
                    <span className='foodImg'><img className='img-fluid' src={`/assets/images/${props.food.filename}`} /></span>
                    <div className='btnCont'>
                        {foodCount > 0 ? <div className='indeCont'>
                            <button onClick={decreaseFoodCount}>-</button>
                            <span>{foodCount}</span>
                            <button onClick={increaseFoodCount}>+</button>
                        </div> : <button className='btn btn-success btn-sm w-100' onClick={increaseFoodCount}>Add</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect()(Food);