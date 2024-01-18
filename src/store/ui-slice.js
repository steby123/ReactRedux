import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartInvisible : false,
    notifiaction: null
}

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState, 
    reducers:{
        toogle (state) {
            state.cartInvisible = !state.cartInvisible
        },
        showNotification(state, action){
            state.notifiaction = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }

});


export default uiSlice.reducer
export const uiActions = uiSlice.actions;