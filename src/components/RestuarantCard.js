const RestuarantCard=({resObj})=>{
    const {name,cloudinaryImageId,cuisines,sla,avgRating}=resObj?.info;
    return(
        <div className="res-card w-60 bg-orange-100 hover:bg-orange-200 shadow-2xl p-4">
            <img className="res-img w-56 h-56 m-1" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3 className="font-bold text-xl bg-clip-content truncate break-words">{name}</h3>
            <h4 className="bg-clip-content truncate break-words">{cuisines.join(', ')}</h4>
            <p className="font-bold">{avgRating>4.0?<span className="bg-green-600 text-white p-1 rounded">⭐{avgRating}</span>:<span className="bg-red-600 p-1 rounded text-white">⭐{avgRating}</span>} . {sla.slaString}</p>
        </div>
    )
}
 
export default RestuarantCard;