import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //UserContextMethod-hooks come from react
    const {loggedInUser} = useContext(userContext);

    //subscribing to the store using a Selector i.e Read the store
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between shadow-lg bg-pink-50">
            <div className="logo-container">
                <img
                    className="w-40"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-2"><Link to="/"> Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/grocery"> Grocery </Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart-({cartItems.length})</Link></li>
                    <button
                        className="px-2"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }}
                    >
                        {btnName}</button>
                        {/* <li className="px-2">User:{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;