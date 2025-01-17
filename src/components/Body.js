import RestaurantCard, { withOffersLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from '../utils/useOnlineStatus';
import { LIST_URL } from "../utils/constants";

const Body=()=>{

    //Local State Variable
    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState([]);

    const [searchText, setSearchText]=useState("");

    const onlineStatus = useOnlineStatus();

    const RestaurantCardOffers = withOffersLabel(RestaurantCard) 


    //whenever state variables update, react triggers reconciliation cycle(re-renders the component)
    console.log("Body Rendered",listOfRestaurants)

    useEffect(()=>{fetchData()},[]
)

const fetchData = async ()=>{
    const data = await fetch(LIST_URL);
    const json= await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
}

if(onlineStatus === false){
    return <h1>Looks like you're offline!!! Please check your internet connection</h1>
   }

  //Conditional Rendering

    return listOfRestaurants.length === 0 ? (
    <Shimmer/>
    ) : (
        <div className="body">
            <div className='filter flex'>
                <div className="search m-2 p-4">
                    <input type="text" className="bg-slate-200 h-9 rounded-md" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
                   
                    <button className="px-4 py-2 bg-green-50 m-4 rounded-lg border-black font-semibold text-lg" onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        // Get data from input box, Searchtext
                        console.log(searchText);
                        const filteredres= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          console.log(filteredres);
                       // setListOfRestaurants(filteredres);
                        setFilteredList(filteredres)
                    }}>Search</button>
                  
                </div>
                <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-lg" onClick={()=>{
               const filtered= listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating>4.5);
                setListOfRestaurants(filtered)
            }}>Filter Top restaurants</button>
            </div></div>
            <div className='flex flex-wrap'>
           

                {
                    filteredList.map(restaurant=> (
                    <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                        {/* if the restaurant has offer, show it using HOC */}
                        { restaurant.info.avgRating >4.3 ? <RestaurantCardOffers resData={restaurant}/> :
                        <RestaurantCard  resData={restaurant}/>
}
                        </Link>)
                    )
                }
               

            </div>        
        </div>
    )
}


export default Body;