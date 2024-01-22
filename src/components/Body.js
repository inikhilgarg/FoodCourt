import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer  from "./Shimmer"


const Body=()=>{
    const [res,setRes]=useState([])
    const [filter,setFilter]=useState([])
    const [search,setSearch]=useState("")

    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.4089123&lng=77.3177894")
        const jsonData=await data.json();
        console.log(jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        const resData=jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setRes(resData)
        setFilter(resData)
    }
    useEffect(()=>{
        console.log("useEffect")
        fetchData();
    },[])
    console.log("Body rendered")
    if(res.length===0) return <Shimmer/>
    
    return(    
        <div className="body-container">
            <div className="search-container">
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <button onClick={()=>{
                    setFilter(res.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase())))
                    
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