import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartQuantity = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartQuantity.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id:item.id,
              title:item.itemName,
              quantity:item.itemQuntity,
              total:item.itemTotal,
              price:item.itemPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
