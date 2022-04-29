import './Checkout-item.style.scss'
import { connect } from 'react-redux'
import {addItem,clearItem,removeItem} from '../../redux/cart/cart.action'
const CheckoutItem = ({item,addItem,clearItem,removeItem}) =>{
    const {name,imageUrl,price,quantity} = item
    return (
        <>
            <div className='checkout-item'>
                <div className='image-container'>
                    <img src={imageUrl} alt='item'/>
                </div>
                <span className='name'>{name}</span>
                <spam className='quantity'>
                    <span onClick={() => clearItem(item)} className='arrow'>&#10094;</span>
                        {quantity}
                    <span onClick={() => addItem(item)} className='arrow'>&#10095;</span>
                </spam>
                <span className='price'>{price}</span>
                <div onClick={() => removeItem(item)} className='remove-button'>&#10005;</div>
            </div>
        </>
    )
}
let mapDispatchToProps = dispatch =>({
    addItem : item => dispatch(addItem(item)),
    clearItem : item => dispatch(clearItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps) (CheckoutItem)