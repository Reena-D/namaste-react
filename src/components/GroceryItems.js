import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { GROCERY_URL } from '../utils/constants';

const GroceryItems = () => {

    const [groceryItem, setGroceryItem]=useState([])
    useEffect(()=>{
            fetchMenu();
        },[])
    
        const fetchMenu = async () => {
            const data = await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
        
          
         // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json=await data.json();
            console.log(json);
            //optional chaining
            setGroceryItem(json.data?.widgets[1]?.data )
           // setGroceryItem(json)
        }
console.log(groceryItem)

const {displayName,imageId} = groceryItem || {};
        
  return (
    <div className='flex flex-wrap m-2 p-2'>
      {groceryItem?.map(item=>(
      <div className='m-2 p-2'>
      <img src={GROCERY_URL+item.imageId} className="h-40" alt="" />
      <h1 className='font-semibold'>{item.displayName}</h1>
      </div>

      )        
      )}
     
          
     
      
    </div>
  )
}

export default GroceryItems
