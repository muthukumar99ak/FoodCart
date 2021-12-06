import './header.css';

const Header = (props) => {
    return (
        <div className='headerCont'>
            <div className="headerSubCont">
                <h2>Fruits Shop</h2>
                <input type='text' className='searchBox' placeholder='Search for dishes...' onChange={props.searchFoods} />
            </div>
        </div>
    )
}

export default Header;