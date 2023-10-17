import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const cart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        fetchCart(){
            const localCartData = localStorage.getItem("cart");
           try {
            if (localCartData) {
                const parsedCartData = JSON.parse(localCartData);
                console.log("parseddata ", parsedCartData);
                return [...parsedCartData];
            }
           } catch (error) {
            console.error(error)
           }
           
            
        },

        addToCart(state,action){
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state));
        },
        removeFromCart(state,action){
            state.pop(action.payload)
            localStorage.setItem("cart",JSON.stringify(state))
        },
    }
})


export default cart.reducer
export const {addToCart, removeFromCart,fetchCart} = cart.actions