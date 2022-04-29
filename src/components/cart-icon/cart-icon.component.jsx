import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.styles.scss'

import {useState} from 'react'
import {connect} from 'react-redux'


const CartIcon = ({itemCount}) =>{
    const [hidden,setHidden] = useState(false)
    const handleDropDown = () => {
        setHidden(!hidden)
    }
    return(
        <>
            <div className='cart-icon' onClick={handleDropDown}>
                <ShoppingIcon className='shopping-icon' />
                {
                    hidden?<CartDropDown />:''  
                }
                <span className='item-count'>{itemCount}</span>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    itemCount: state.cart.cartItems.length
})
export default connect(mapStateToProps,null)(CartIcon)