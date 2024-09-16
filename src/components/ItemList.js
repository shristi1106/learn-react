// import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log("item", items)
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="m-2 p-2 border-b-2 border-grey-300 text-left flex justify-between">
                    <div className="9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    {/* <div className="w-3/12 p-4" >
                        <img src={CDN_URL + item?.card?.info?.imageId } className="w-full" />
                    </div> */}
                    <div className="w-3/12 p-4 ">
                         <button className="p-2 bg-green-500 shadow-lg mx-6 rounded-lg"> Add+ </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;