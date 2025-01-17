import React from "react";

// class based component

class UserClass extends React.Component {

    constructor(props){
        console.log("Child constructor called");
        super(props);
        this.state={
            userInfo:{
           name:"ads",
           location:"dfsd"
            }
        }
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/Reena-D");
       const json= await data.json();
       console.log(json);

       this.setState({
        userInfo:json
       })
    }

    componentDidUpdate(){
        console.log("comp did update called");
    }

    componentWillUnmount(){
        console.log("comp will unmount called");
    }
    render()
    
    {
        const {name,location}= this.state.userInfo;
      //  console.log(this.props.name + "Child render called");
       
    return(
        <div>
            
            <h1 className="text-lg text-red-600">Name: {name}</h1>
            <h2 className="text-lg text-red-600">Location: {location}</h2>
           
        </div>
    )
}
}
export default UserClass;