import React, { useEffect, useState } from "react"
import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    //Local state Variable-Super powerfull variable
    const [ListOfRestaurants, setListOfRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

    console.log("ListOfRestaurants", ListOfRestaurants);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.43019&lng=82.1805021&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //render our page with new data
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Online status check when internet off/on
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1>Looks like you are offline!!!, please check your internet connection.</h1>

    // conditional rendering
    if (ListOfRestaurants?.length === 0 && filteredRestaurant === 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input
                        type="text"
                        className="search-box border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-3 py-2 m-2 bg-green-200 rounded-lg"
                        onClick={() => {
                            //filter the restaurants and update the ui
                            //search text
                            const filteredRestaurant = ListOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>

                <div className="filter m-4 p-4 flex items-center">
                    <button
                        className='filter-bt bg-gray-200 px-4 py-2 rounded-lg'
                        onClick={() => {
                            //filter logic here 
                            const filteredList = ListOfRestaurants.filter
                                (
                                    (res) => res.info.avgRating > 4
                                );
                            setListOfRestaurants(filteredList);
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated restaurants</button>
                </div>
            </div>

            <div className='res-container flex flex-wrap'>
                {filteredRestaurant.map((restaurant, index) => (
                    // <RestaurantCard key={index} resData={restaurant.info} />
                    // console.log( restaurant.info,"abcd")

                    <Link key={index} to={"/restaurants/" + restaurant?.info?.id}>

                        {/* if the restaurant is promoted then add a promoted label to it */}
                        {restaurant?.info?.promoted ? (<RestaurantCardPromoted resData={restaurant?.info} />) : (<RestaurantCard resData={restaurant?.info} />)}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;