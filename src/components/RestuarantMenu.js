import { useEffect, useState } from "react"
import { menuAPI } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const RestuarantMenu=()=>{
    const [menu,setMenu]=useState([])
    const {resId}=useParams();
    console.log(resId)
    useEffect(()=>{
        console.log("useEffect")
        fetchMenu()
    },[])
    const fetchMenu=async()=>{
        const data=await fetch(menuAPI+resId)
        const menuData=await data.json();
        setMenu(menuData)
        console.log(menuData)
    }
    console.log("Body rendered")
    
    if(menu.length===0) return <Shimmer/>;
    // console.log(menu?.data?.cards[2]?.card?.card?.info);
    const {name,cuisines,costForTwoMessage}=menu?.data?.cards[2]?.card?.card?.info
    const {itemCards}=menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards)
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h3>Menu:</h3>
            <ul>
                {itemCards.map((e)=><li key={e.card.info.id}>{e.card.info.name}- Rs:-{e.card.info.price/100}</li>
                )}
            </ul>
        </div>
    )
}

export default RestuarantMenu;