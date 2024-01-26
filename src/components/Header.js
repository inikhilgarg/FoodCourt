import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [login,setLogin]=useState(false)
    const online=useOnlineStatus()
    return (
        <div className="flex justify-between items-center">
            <div id="logo-container">
                <img className="w-24" src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943" alt="img-logo"/>
            </div>
            <div>
                <ul className="flex gap-9 px-4 font-bold">
                    <li className="hover:font-extrabold">Online:{online?"🟢":"🔴"}</li>
                    <li className="hover:font-extrabold"><Link to={"./"}>Home</Link></li>
                    <li className="hover:font-extrabold"><Link to={"./About"}>About Us</Link></li>
                    <li className="hover:font-extrabold"><Link to={"./Contact"}>Contact Us</Link></li>
                    <li className="hover:font-extrabold"><Link to={"./Instamart"}>Instamart</Link></li>
                    <li className="hover:font-extrabold"><Link to={"./Cart"}>Cart</Link></li>
                    <li className="hover:font-extrabold"><button className="bg-red-700 text-white px-4 rounded-md" onClick={()=>{setLogin((prev)=>!prev)}} style={{cursor:"pointer"}}>{login?"Login":"Logout"}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;