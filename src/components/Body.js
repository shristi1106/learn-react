import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";

const Body = () => {

    //Local state Variable-Super powerfull variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([
        {
            data: {
                "id": "172263",
                "name": "Satyam Restaurant",
                "cloudinaryImageId": "xpeaa5zcuxy8vt36iu4l",
                "locality": "Nagar Palika Road",
                "areaName": "Balrampur",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "South Indian",
                    "Chinese"
                ],
                "avgRating": 3.2,
                "veg": true,
                "parentId": "178966",
                "avgRatingString": "3.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 0.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "0.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-11 22:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/satyam-restaurant-nagar-palika-road-balrampur-balrampur-172263",
                "type": "WEBLINK"
            }
        },
        {
            data: {
                "id": "380216",
                "name": "Ram Mishthan Bhandar",
                "cloudinaryImageId": "xso8rlchtsdwtzy5q1ju",
                "locality": "Chowk Road",
                "areaName": "Veer vinay chauraha",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Sweets",
                    "Snacks"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "21906",
                "avgRatingString": "4.4",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-11 20:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ram-mishthan-bhandar-chowk-road-veer-vinay-chauraha-balrampur-380216",
                "type": "WEBLINK"
            }
        },
    ]);

    //Normal JS Variable
    let ListOfRestaurants2 = [
        {
            data: {
                "id": "172263",
                "name": "Satyam Restaurant",
                "cloudinaryImageId": "xpeaa5zcuxy8vt36iu4l",
                "locality": "Nagar Palika Road",
                "areaName": "Balrampur",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "South Indian",
                    "Chinese"
                ],
                "avgRating": 3.2,
                "veg": true,
                "parentId": "178966",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 41,
                    "lastMileTravel": 0.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "0.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-11 22:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/satyam-restaurant-nagar-palika-road-balrampur-balrampur-172263",
                "type": "WEBLINK"
            }
        },
        {
            data: {
                "id": "380216",
                "name": "Ram Mishthan Bhandar",
                "cloudinaryImageId": "xso8rlchtsdwtzy5q1ju",
                "locality": "Chowk Road",
                "areaName": "Veer vinay chauraha",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Sweets",
                    "Snacks"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "21906",
                "avgRatingString": "4.4",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 0.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "0.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-03-11 20:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "badgeType": "BADGE_TYPE_OFFER_PACK",
                    "offerSubText": "with offer pack",
                    "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                }
            },
            "analytics": {

            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/ram-mishthan-bhandar-chowk-road-veer-vinay-chauraha-balrampur-380216",
                "type": "WEBLINK"
            }
        },
    ]

    return (
        <div className='body'>
            <div className="filter">
                <button className='filter-btn' onClick={() => {
                    //filter logic here (change into one res)

                    const filteredList = ListOfRestaurants.filter
                    (
                        (res) => res.data.avgRating > 4  
                    );
                    
                    setListOfRestaurants(filteredList)
                    console.log(ListOfRestaurants, "ListOfRestaurantsj")
                }}
                >
                    Top Rated restaurants</button>
            </div>

            <div className='res-container'>
                {ListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />))}
            </div>
        </div>
    )
}

export default Body;