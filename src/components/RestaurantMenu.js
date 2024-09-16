
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import React, { useState } from 'react';

const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);//responsible for display the data
  const [showIndex, setShowIndex] = useState(0);



  // const fetchMenu = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.43019&lng=82.1805021&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   // console.log(json, "hello");
  //   setResInfo(json.data);
  // };

  if (resInfo === null)
    return <Shimmer />;

  // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card, "qqjnqxjnqixj");

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("itemcard", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log("categories",categories)
  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-lg">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
      {/* Categories Acordians(for each categories we will build accordians) */}
      {
        categories.map((category, index) =>
          // controlled component- its show one accordian and collabs all other
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />)
      }


      {/* <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)} */}
      {/* <li>{itemCards[0].card.info.name}</li>
      <li>{itemCards[1].card.info.name}</li>
      <li>{itemCards[2].card.info.name}</li>
      <li>{itemCards[3].card.info.name}</li> */}
      {/* </ul> */}
    </div>
  )
}

export default RestaurantMenu;
