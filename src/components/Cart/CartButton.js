import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const idCart = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleChangeHandler = () => {
    dispatch(uiActions.toogle() )
  }

  return (
    <button className={classes.button} onClick={toggleChangeHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{idCart}</span>
    </button>
  );
};

export default CartButton;
