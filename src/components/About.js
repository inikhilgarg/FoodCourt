import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About=()=>{
//     return (
//         <div>
//             <h1>Kya janna hai </h1>
//             <User name="Nikhil garg" location="Faridabad" email="nikhilgarg@gmail.com"/>
//             <UserClass name="Nikhil garg" location="Faridabad" email="nikhilgarg@gmail.com"/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parnt constructor called")
    }
    componentDidMount(){
        console.log("Parent mount")
    }
    render(){
        console.log("Parent render")
        return (
            <div>
                <UserClass name="Nikhil garg" location="Faridabad" email="nikhilgarg@gmail.com"/>
                {/* <UserClass name="garg" location="Faridabad" email="nikhilgarg@gmail.com"/> */}
            </div>
        )
    }
}

export default About;