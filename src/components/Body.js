import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer  from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [res,setRes]=useState(null)
    const [filter,setFilter]=useState([])
    const [search,setSearch]=useState("")
    const onlineStatus=useOnlineStatus()
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.4089123&lng=77.3177894")
        const jsonData=await data.json();
        console.log(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        const resData=jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        setRes(resData)
        setFilter(resData)
    }
    useEffect(()=>{
        console.log("useEffect")
        fetchData();
    },[])
    console.log("Body rendered")
    if(onlineStatus===false) return <h1>Looks Like you lost our internet connectiion</h1>
    if(res==null) return <Shimmer/>
    
    return(    
        <div>
            <div className="flex gap-4 m-4">
                <input className="border border-black rounded-md" placeholder="Search" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <button className="text-white bg-blue-600 px-3" onClick={()=>{
                    setFilter(res.filter((e)=>e.info.name.toLowerCase().includes(search.toLowerCase())))
                    
                }}>Search</button>
                <button className="text-white bg-orange-600 px-3" onClick={()=>{
                    setFilter((prev)=>{
                        let n = prev.filter((e)=> e.info.avgRating>4.0)
                        return n
                    })
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container flex gap-4 flex-wrap m-4">
                {
                    filter.map((e)=><Link key={e.info.id} to={"restuarants/"+e.info.id}><RestuarantCard resObj={e}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body;