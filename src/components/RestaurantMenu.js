import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { MENU_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

  const {resId} = useParams();
  
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState()


   if ( resInfo === null ){<Shimmer/> }
        
        

    //initaiall u have null in resInfo, so u might get into error bcoz if using ternary operator blindly
    const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info || {};


   //GraphQL helps in these type of overfetching cases, so that u can load only data which is rrequired in ur app
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
   console.log(itemCards)

   //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
   
  console.log(categories)
   

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
     
      <p className='font-bold text-lg'>{cuisines} - {costForTwoMessage}</p>
     
     {/* categories accordian */}
     {categories?.map((category,index) =>
     // controlled component
     <RestaurantCategory 
     key={category.card.card.title} 
     data={category?.card?.card}
     showItems={index === showIndex ? true : false}
     setShowIndex={() => setShowIndex(index)}
     />)}


    
    </div>
  )
}

export default RestaurantMenu;


// {/* <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards[1].card.info.name}</li> */}
       /* <li>{itemCards[1].card.info.name}</li> */


         {/* <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
     
     <p>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
     <h3>{resInfo?.cards[2]?.card?.card?.info.avgRating}</h3>
     <h2>Menu</h2>
     <ul>
      
       {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item=>(
           <li>{item.card.info.name} - {"Rs. "}{item.card.info.defaultPrice || item.card.info.price}</li>
       ))}
     </ul> */}


    //  <h3>{avgRating}</h3>
    //  <h2>Menu</h2>
    //  <ul>
       
    //    {itemCards?.map(item=>(
    //        <li>{item.card.info.name} - {"Rs. "}{item.card.info.defaultPrice || item.card.info.price}</li>
    //    ))}
    //  </ul>