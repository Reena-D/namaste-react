import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import React from "react";

const Header=()=>{

    const [btnName, setBtnName] =useState("Login");

    const onlineStatus = useOnlineStatus();
    console.log("Header rendered");

    // Subscribing to store using Selector
    // this method  store.cart.items subscribes to the small portion of store, which is efficient than subscibing to whole store
    const cartItems = useSelector((store) => store.cart.items);
  //  console.log(cartItems)

  const totalItems = Object.values(cartItems).reduce(
    (sum, item) => sum + item.quantity,
    0
  );


    //   LESS efficient method , bcoz it subscribes to whole store
    // const store = useSelector(store);
    // const cartItems = store.cart.items;

    //if no dependency array - then useEffect will be called on every render
    // if dependanct array is empth [] then useEffect is called on initial render(just once)
    //if dependancy array is [btnName] then useEffect called everytime btnName is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnName])

    return(
        <div className='flex justify-between bg-green-50 shadow-lg h-36'>
            <div className='logo-container'>
                <img className='w-36' src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 text-xl font-semibold">
                    <li className="px-4 text-amber-500">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4 text-teal-700"><Link to="/grocery">GrocyMart</Link></li>
                    <li className="px-4 text-amber-500"><Link to="/">Home</Link></li>
                    <li className="px-4 text-amber-500"><a href="/about">About</a></li>
                    <li className="px-4 text-amber-500"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 text-amber-500"><Link to="/cart">🛒 ({totalItems})</Link></li>
                    
                    <button className="text-teal-700" onClick={()=>{ btnName==="Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;