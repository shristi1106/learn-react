

//RestaurantCategory-Controlled Component coz it coz their child component i.e RestaurantMenu has control to open/close of individual item

import ItemList from "./ItemList";

//RestaurantMenu- it didn't have full controlled to its parent so its is known as uncontrolled component 
const RestaurantCategory = ({ data,showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
      };
    // const [showItems, setShowItems] = useState(false);

    // const handleClick = () => {
    //     console.log("clicked")
    //     setShowItems(!showItems); //Toggle item
    // };

    return (
        <div>
            {/*Accordian Header */}
            <div className="w-6/12 bg-grey shadow-lg mx-auto my-5 p-4 cursor-pointer">
                <div
                    className="flex justify-between"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg ">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {/*Accordian Body */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
            
        </div>
    )
}
export default RestaurantCategory;