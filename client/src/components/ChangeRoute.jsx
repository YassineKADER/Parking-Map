import { useMap } from "react-leaflet";
import L from "leaflet";
import { layer } from "@fortawesome/fontawesome-svg-core";

export default function Changeroute(props){
    const map = useMap();
    const latitude = window.localStorage.getItem("latitude");
    const longitude = window.localStorage.getItem("longitude");
    map.eachLayer((layer)=>{
            if(layer.options.waypoints && layer.options.waypoints.length){
                layer.spliceWaypoints(0, 2);
                layer.setWaypoints([L.latLng(props.lat, props.long), L.latLng(props.lat1, props.long1)])
            }
        })
}