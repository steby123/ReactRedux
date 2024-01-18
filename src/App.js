import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';

let isNitial = true ;


function App() {
  const cartInvisible = useSelector((state) => state.ui.cartInvisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notifiaction = useSelector((state) => state.ui.notifiaction);

  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    if(isNitial){
      isNitial= false;
      return;
    }

    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  },[cart, dispatch])

  return (
    <Fragment>
      {notifiaction && <Notification status={notifiaction.status} title={notifiaction.title} message={notifiaction.message}/>}
      <Layout>
        {cartInvisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
