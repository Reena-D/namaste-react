import { Component } from "react";
import UserClass from "./UserClass";

// class based component

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount() {
        console.log("Parent did mount called");
    }

    render(){
        console.log("Parent render called");
    return (
        <div className="m-3 p-3">
            <h2 className="font-bold text-xl m-2 p-2">About us</h2>
            <UserClass name={"Reena"} location={"Dharwad"}/>
          
        </div>
    )
}
}

export default About;