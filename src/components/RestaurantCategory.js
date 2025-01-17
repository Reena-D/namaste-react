
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  }

    
  return (
    <div>
     
        {/* Accordian Header */}
        <div className="bg-gray-50 shadow-lg p-4 w-6/12 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="text-lg font-bold">{data.title} ({data.itemCards?.length})</span>
            <span className="">🔻</span>
            </div>
       {showItems && <ItemList items={data.itemCards}/> }

        </div>

        {/* Accordian Body */}
       
    </div>
  )
}

export default RestaurantCategory
