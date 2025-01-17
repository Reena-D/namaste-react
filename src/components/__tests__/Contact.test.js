import React from "react";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Grouping multiple test cases of something using describe
describe("Contact us page test cases", () => {
   
    test("Should load contact us component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load contact us component", () => {
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    
    test("Should load 2 input boxes contact us component", () => {
        // Rendering
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        // Querying
        const input = screen.getAllByRole("textbox");
    
    
        // Assertion
        expect(input.length).toBe(2);
    })

})



