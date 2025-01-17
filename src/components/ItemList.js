import { useDispatch, useSelector } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addButton, addItem, decrementItem, incrementItem, removeButton } from "../redux/cartSlice";
//import { addItem} 

const ItemList = ({items, id}) => {
    console.log(items)

    const dispatch = useDispatch();
    
    const cart = useSelector((store) => store.cart.items); // Access cart state
    console.log(cart)

    const getItemCount = (item) => cart[item.card.info.id]?.quantity ; // Get item count from cart
    
  
    const handleAdd = (item) => {
      dispatch(addItem(item)); // Add item to cart
    };
  
    const handleIncrement = (item) => {
      dispatch(incrementItem(item.card.info.id)); // Increment item count
    };
  
    const handleDecrement = (item) => {
      dispatch(decrementItem(item.card.info.id)); // Decrement item count
    };
  
   
    
    const handleClick = (item) => {
      // Dispatch an action
      dispatch(addItem(item));
     // dispatch(addButton())      
    }
  return (
    <div>
      
        {items?.map(item=>{
          
         const itemCount = getItemCount(item);
         return (
         <div key={item.card.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
           <div>  
            <div className="py-2">
                <span className="font-medium text-red-500 text-xl">{item.card.info.name}</span>
                <span className="font-medium text-green-600 text-xl"> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs ">{item.card.info.description}</p>
                </div>
                <div className="">
                <div className="absolute flex justify-between">
            {/* <button className="p-1 bg-orange-50 font-bold shadow-xl mx-16 rounded-lg w-16 h-8" onClick={() => handleClick(item)}>Add</button> */}
            {itemCount > 0 ? (
                <div className="flex items-center">
                  <button
                    className="p-1 bg-orange-500 font-bold shadow-xl mx-2 rounded-lg w-8 h-8"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="mx-2 bg-orange-200 font-semibold text-xl w-8 text-center">{itemCount}</span>
                  <button
                    className="p-1 bg-orange-500 font-bold shadow-xl mx-2 rounded-lg w-8 h-8"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="p-1 bg-orange-500 font-bold shadow-xl mx-16 rounded-lg w-16 h-8"
                  onClick={() => handleAdd(item)}
                >
                  Add
                </button>
              )}
            
                        </div>
            </div>
            <img src={ITEM_URL + item.card.info.imageId} className="w-28"/>
              
        </div>)}
        )}
    </div>
  )
}

export default ItemList
