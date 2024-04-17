import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    //Local state Variable-Super powerfull variable
    const [ListOfRestaurants, setListOfRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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

    // conditional rendering
    if (ListOfRestaurants?.length === 0 && filteredRestaurant === 0) {
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search=box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        //filter the restaurants and update the ui
                        //search text
                        const filteredRestaurant = ListOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
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

            <div className='res-container'>
                {filteredRestaurant.map((restaurant, index) => (
                    // <RestaurantCard key={index} resData={restaurant.info} />
                    // console.log( restaurant.info,"abcd")

                    <Link key={index} to={"/restaurants/" + restaurant?.info?.id}> <RestaurantCard resData={restaurant?.info} /> </Link>

                ))}
            </div>
        </div>
    )
}

export default Body;