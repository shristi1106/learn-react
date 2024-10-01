import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {

            //Redux toolkit(using immer libraries behind the scene)
            //mutating(directly modifying our state here)
            state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //RTk- either mutate the existing state or return new state .ie return [];
            state.items.length = 0; //makes items Empty i.e []
            // return{items: []}; 
            // console.log(current(state));
        },
    },
})

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;