
import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
//import { createBrowserRouter } from 'react-router-dom';
//import { RouterProvider } from "react-router/dom";
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
//import GroceryItems from './components/GroceryItems';
import { Provider } from 'react-redux';
import reduxStore from './redux/reduxStore';
import CartPage from './components/CartPage';


//Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// on Demand loading
// Dynamic import

 const GroceryItems = lazy(() => import('./components/GroceryItems'))

const AppLayout=()=>{
    return (
      <Provider store={reduxStore}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
      </Provider>
    )
}

const appRouter= createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>, 
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu/>,
      },
      {
        path: '/grocery',
        element: <GroceryItems/>,
      },
      {
        path: '/cart',
        element: <CartPage/>,
      }
    ]
  },
 
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)

