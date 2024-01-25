import React from "react";

class UserClass extends React.Component{
    constructor(props){
        console.log("Child constructor called")
        super(props);
        this.state={
            userInfo:{
                name:"alice",
                location:"US",
                bio:"Software developer",
                avatar_url:"#"
            }
        }
    }
    async componentDidMount(){
        const data=await fetch('https://api.github.com/users/inikhilgarg')
        const json=await data.json()
        console.log(json)
        this.setState({userInfo:{
            name:json.name,
            location:json.location,
            bio:json.bio,
            avatar_url:json.avatar_url
        }})
        console.log(this.props.name, " mount")
    }
    componentDidUpdate(){
        console.log("Update")
    }
    componentWillUnmount(){
        console.log("unmount")
    }
    render(){
        const {name,location,bio,avatar_url}=this.state.userInfo
        console.log(this.props.name," render called")
        return( 
            <div>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {bio}</h4>
            </div>
        )
    }
}

export default UserClass;