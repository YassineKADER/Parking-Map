import "./css/Modal.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark, faCar,faMapLocationDot, faStopwatch, faMapPin } from "@fortawesome/free-solid-svg-icons"

export default function Modal({onClose, open, data, location}){
    if(!open) return null

    const showIngoogleMap = ()=>{
        window.open("https://maps.google.com/maps?q="+data.location.latitude+","+data.location.longitude+"&amp;z=15&amp;","_blank")
    }
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        function deg2rad(deg) {
            return deg * (Math.PI/180)
          }
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }

    return (
        <div id="modalContainer">
        <div className="topModal"><p><FontAwesomeIcon icon={faMapPin} color={(data.freespace>0)?"green":"red"}/> {data.name}</p><button onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button></div>
            <div className="modalContent" id="modalContent">
            <p>{data.description}</p>
            <div className="dtcontainer">
            <span><FontAwesomeIcon icon={faCar} /><p> Available Places:</p><span>{data.freespace}</span></span>
            <span><FontAwesomeIcon icon={faMapLocationDot} /><p> Distance:</p><span>{getDistanceFromLatLonInKm(location[0],location[1],data.location.latitude,data.location.longitude).toFixed(2)}km</span></span>
            <span><FontAwesomeIcon icon={faStopwatch} /> <p>Time:</p><span>{(getDistanceFromLatLonInKm(location[0],location[1],data.location.latitude,data.location.longitude)/104).toFixed(2)}h</span></span>
            </div>
            <div><button onClick={showIngoogleMap}>Open in google Map</button></div>
            </div>
        </div>
    )
}
