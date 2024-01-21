import RestuarantCard from "./RestuarantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body=()=>{
    const [res,setRes]=useState(restaurants)
    const [filter,setFilter]=useState(restaurants)
    const [search,setSearch]=useState("")
    return(    
        <div className="body-container">
            <div className="search-container">
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <button onClick={()=>{
                    setFilter((prev)=>{
                        return prev.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase()))
                    })
                }}>Search</button>
                <button onClick={()=>{
                    setFilter((prev)=>{
                        let n = prev.filter((e)=> e.info.avgRating>4.0)
                        return n
                    })
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filter.map((e)=><RestuarantCard key={e.info.id} resObj={e}/>)
                }
            </div>
        </div>
    )
}

export default Body;