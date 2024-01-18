import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart-slice';
import { useDispatch} from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()
  //const cart = useSelector((state) => state.cart);

  const cartAddHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
      // const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      // updatedItem.itemQuntity++;
     //  updatedItem.totalPrice = updatedItem.totalPrice + price;
      // const existingItemIndex = updatedItems.findIndex(
       //  (item) => item.id === id
     //  );
     //  updatedItems[existingItemIndex] = updatedItem;
   //  } else {
      // updatedItems.push({
        // id: id,
         //itemPrice: price,
        // itemQuntity: 1,
        // itemTotal: price,
        // name: title,
      // });
     //}

     //const newCart = {
       //totalQuantity: newTotalQuantity,
       //items: updatedItems,
    //};

    //dispatch(cartAction.replaceCart(newCart));
    
    dispatch(cartAction.addItemToCart({
      id:id,
      title:title,
      price:price
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartAddHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
