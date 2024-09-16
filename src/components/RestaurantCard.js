import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

    return (
        <div
            className="res-card p-4 m-4 w-[250px] rounded-lg shadow-lg bg-grey-200 hover:bg-gray-300"
        >
            <img
                className="res-logo rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines?.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{slaString}minutes</h4> */}
        </div>
    );
};

// Higher Order Component
// Input- Restaurants Card => RestaurantCardPromoted

export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className=" absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div >
        );
    };
};

export default RestaurantCard;