import { useMap } from "react-leaflet";
import L from "leaflet";

export default function Changeroute(props){
    const map = useMap();
    map.eachLayer((layer)=>{
        if(layer.options.waypoints && layer.options.waypoints.length){
            console.log(layer.options.waypoints)
            console.log("changed")
            layer.spliceWaypoints(0, 2);
            layer.setWaypoints([L.latLng(props.lat, props.long), L.latLng(props.lat1, props.long1)])
        }
    })
}