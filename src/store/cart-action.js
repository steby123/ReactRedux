import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://learn-redux-f752f-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not fetch cart data');
            }

            const data = await response.json();
            return data;
        };
        try{
            const cartData = await fetchData();
            dispatch(cartAction.replaceCart(cartData));
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Fetching cart data failed!'
            }))
        }
    }
}

export const sendCartData = (cart) => {
        return async (dispatch) => {
            dispatch(
                uiActions.showNotification({
                status:'pending',
                title:'Sending...',
                message:'Sending cart data!'
            })
        )
  
        const sendRequest = async () => {
            const response = await fetch('https://learn-redux-f752f-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify({
                    items:cart.items,
                    totalQuantity:cart.itemQuntity
                })
            });
    
            if(!response.ok){
                throw new Error('Sending cart data failed.')
            }
        }
  
        try{
            await sendRequest();
            dispatch(uiActions.showNotification({
                status:'succes',
                title:'Succes!',
                message:'Sent cart data succesfully!'
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending cart data failed!'
            }))
        }
    }
}