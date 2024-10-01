import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";




const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items); //always subscribe to the small portion of the store otherwise it will impact in this comp if any changes made in store
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-4">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="m-6/12 m-auto">
            <button className="p-2 m-2 text-white bg-black rounded-lg"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 &&
                (<h1>Cart is empty now, please add items to the cart!!</h1>
                )}
            <ItemList items={cartItems} />
        </div>
    </div>
};
export default Cart;