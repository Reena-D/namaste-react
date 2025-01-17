import React from "react";
import { fireEvent, screen } from "@testing-library/dom";
import Header from "../Header";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import reduxStore from "../../redux/reduxStore";



it("Should render Header component with login button", () => {
    render(
        <BrowserRouter>
           <Provider store={reduxStore}>
              <Header/>
           </Provider>
        </BrowserRouter>
    )

   // Querying
  // const loginButton = screen.getByRole("button", {name: "Login"});
   //const loginButton = screen.getByText("Login");

   const cartItems = screen.getByText("🛒 (0)");

   // u can test with regex exp also, when half to be tested
   //const cartItems = screen.getByText(/Grocy/);


   

   // Assertion
   expect(cartItems).toBeInTheDocument();
})



it("Should render Header component with login button", () => {
    render(
        <BrowserRouter>
           <Provider store={reduxStore}>
              <Header/>
           </Provider>
        </BrowserRouter>
    )

   const loginButton = screen.getByRole("button", {name: "Login"});

   // Simulates click event
   fireEvent.click(loginButton);

   const logutButton = screen.getByRole("button", {name: "Logout"});


    // Assertion
    expect(logutButton).toBeInTheDocument();
})
