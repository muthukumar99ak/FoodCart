import { useSelector } from "react-redux";

const Cart = (props) => {
    const totalAmount = useSelector(state => state.total)
    const cartList = useSelector(state => state.foodItems)

    return (
        <div className={props.from === "route" ? "p-5" : null}>
            {props.from === "route" ? <h5 className='subHeading mb-4'>Your Cart</h5> : null}
            {cartList.map(item => {
                return <div className='row py-3 border-bottom' key={item.id}>
                    <div className='col-9'>{item.foodName}</div>
                    <div className='col-3 text-end'>$ {item.total}</div>
                    {/* <div>{item.count}</div> */}
                </div>
            })}
            <div className='col-12 text-end py-3'>
                <div className='d-flex justify-content-between'>
                    <h5>Grand Total  </h5><h6>$ {totalAmount}</h6>
                </div>
            </div>
        </div>
    )

}

export default Cart;