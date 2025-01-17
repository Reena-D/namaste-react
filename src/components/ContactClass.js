import React from "react";

class ContactClass extends React.Component {

    constructor(props){
        console.log("nester comp constructor called");
        super(props);
        this.state={
           count:0
        }
    }

    componentDidMount(){
        console.log("nested did mount called");
    }
    render(){
        console.log("nested render called");
        return (
            <>
           
            </>
        )
}
}

export default ContactClass;
