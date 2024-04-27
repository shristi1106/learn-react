import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {
    //fetchdata
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.43019&lng=82.1805021&restaurantId=" + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
        const json = await data.json();
        // console.log(json, "hello");
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;