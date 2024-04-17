import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.43019&lng=82.1805021&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json, "hello");
    setResInfo(json.data);
  };

  if (resInfo === null)
  return <Shimmer />;

  console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card, "qqjnqxjnqixj");
  
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}-{costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
        {/* <li>{itemCards[0].card.info.name}</li>
      <li>{itemCards[1].card.info.name}</li>
      <li>{itemCards[2].card.info.name}</li>
      <li>{itemCards[3].card.info.name}</li> */}
      </ul>
    </div>
  )
}

export default RestaurantMenu;
