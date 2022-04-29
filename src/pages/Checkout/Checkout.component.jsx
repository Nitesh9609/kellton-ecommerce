import CheckoutItem from '../../components/checkout-item/Checkout-item.component'
import './Checkout.style.scss'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const Checkout = ({cartItems,totalPrice}) =>{
    return(
        <>
            <div className="checkout-page">
                 <div className='checkout-header'>
                    <div className="heaer-block">
                        <span>Proguct</span>
                    </div>
                    <div className="heaer-block">
                        <span>Descriptiont</span>
                    </div>
                    <div className="heaer-block">
                        <span>Quantity</span>
                    </div>
                    <div className="heaer-block">
                        <span>Price</span>
                    </div>
                    <div className="heaer-block">
                        <span>Remove</span>
                    </div>
                </div>

                {
                    cartItems.map(item =><CheckoutItem item ={item}/> )
                }
                 <div className="heaer-block">
                    <span>Total:${totalPrice}</span>
                </div>

                <div className='test-warning'>
                <div>
                ** Please use the following test credit card for the payments**<br/>
                4242 4242 4242 4242 - Exp: 11/22 - CVV:123

                </div>
                <StripeCheckout price={totalPrice}/>
            </div>
            </div>
            
           
        </>
    )
}


const mapStateToProps = (state) =>({
    
    cartItems : state.cart.cartItems,
    totalPrice : state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,0)
})

export default connect(mapStateToProps,null)(Checkout)