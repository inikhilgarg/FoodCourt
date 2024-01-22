import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const [login,setLogin]=useState(false)
    return (
        <div id="header">
            <div id="logo-container">
                <img className="img-logo" src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943" alt="img-logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"./"}>Home</Link></li>
                    <li><Link to={"./About"}>About Us</Link></li>
                    <li><Link to={"./Contact"}>Contact Us</Link></li>
                    <li><Link to={"./Cart"}>Cart</Link></li>
                    <li><button onClick={()=>{setLogin((prev)=>!prev)}} style={{cursor:"pointer"}}>{login?"Login":"Logout"}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;