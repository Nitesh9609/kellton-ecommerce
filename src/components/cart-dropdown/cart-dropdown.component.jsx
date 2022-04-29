import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown-styles.scss'
import  {CartItem}  from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'


const CartDropDown = ({cartItems}) =>{
    let navigate = useNavigate()
    return (
        <>
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {cartItems.map(item => <CartItem item={item} />)}
                </div>
                <CustomButton
                onClick = {() => navigate('/checkout')}
                >GOTOCHECKOUT</CustomButton>
            </div>
        </>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps,null)(CartDropDown)