import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/CartItem.component";

const CartDropDown = () => {

    const { isCartOpen , setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return ( 
        <div className='cart-dropdown-container' onClick={toggleIsCartOpen}>
            <div className='cart-items' >
                {[].map(item => <CartItem cartItem={item} /> )}
            </div>
        <Button>GO TO CHECKOUT</Button>
      </div>
     )
}
 
export default CartDropDown;