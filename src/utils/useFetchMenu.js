import { useEffect,useState } from "react";
import { menuAPI } from "./constants";
const useFetchMenu=(resId)=>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        fetchData(resId);
    },[])
    async function fetchData(resId){
        const data=await fetch(menuAPI+resId)
        const json=await data.json()
        setMenu(json)
    }
    return menu;
}

export default useFetchMenu;