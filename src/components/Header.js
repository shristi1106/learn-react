import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //UserContextMethod-hooks come from react
    const {loggedInUser} = useContext(userContext);

    return (
        <div className="flex justify-between shadow-lg bg-pink-50">
            <div className="logo-container">
                <img
                    className="w-56"
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
                    <li className="px-2"><Link to="/cart">Cart</Link></li>
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