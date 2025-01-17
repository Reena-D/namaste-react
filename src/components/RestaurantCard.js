import { API_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData} = props;

    const {name,cuisines,avgRating,cloudinaryImageId}=resData?.info;
    return (
        //[250px] is hardcoded size, since its not available in tailwind, we can use [] to write custom values--dynamic classes
        <div className='m-2 p-4 w-[250px] h-[400px] rounded-lg bg-slate-100 hover:bg-slate-200'>  
            <img className='rounded-lg h-56 w-56' src={API_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-xl text-red-500">{name}</h3>
            <h4 className="font-semibold">Cuisines - {cuisines.join(", ")}</h4>
            <h4 className="font-semibold">Rating - {avgRating}</h4>
            <h4 className="font-semibold">Delivery Time - {resData.info.sla.deliveryTime} min</h4>
        </div>
    )
}


//Higher Order Component

//input - RestaurantCard , output/return ==> RestaurantCardPromoted


//here withOffersLabel is HOC that takes ReastaurantCard as input and returns a new ReastaurantCardPromoted component
export const withOffersLabel =(RestaurantCard) =>{
   return (props) =>{
    const {resData} = props;
    const {header,subHeader} = resData?.info?.aggregatedDiscountInfoV3 || {};
    return (
        <div>
         <h2 className="absolute text-white bg-black font-extrabold flex flex-1 m-1 p-1 rounded-lg">{header}- {subHeader}</h2>
         <RestaurantCard {...props}/>
        </div>
    )
   }
}

export default RestaurantCard;