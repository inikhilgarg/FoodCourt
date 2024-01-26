import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useFetchMenu from "../utils/useFetchMenu";

const RestuarantMenu=()=>{
    const {resId}=useParams();
    const menu=useFetchMenu(resId)
    console.log("Body rendered")
    
    if(menu===null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage}=menu?.data?.cards[2]?.card?.card?.info
    const {itemCards}=menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
        <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h3 className="text-xl font-bold">Menu:</h3>
            <ul>
                {itemCards.map((e)=><div className=""><li key={e.card.info.id}>{e.card.info.name}- Rs:-{e.card.info.price/100}</li></div>
                )}
            </ul>
        </div>
    )
}

export default RestuarantMenu;