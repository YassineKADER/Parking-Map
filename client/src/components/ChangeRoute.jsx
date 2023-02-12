import { useMap } from "react-leaflet";
import L from "leaflet";
import { layer } from "@fortawesome/fontawesome-svg-core";

export default function Changeroute(props){
    const map = useMap();
    map.eachLayer((layer)=>{
            if(layer.options.waypoints && layer.options.waypoints.length){
                if((layer.getWaypoints()[1]["latLng"]["lat"]!=props.lat1) && (layer.getWaypoints()[1]["latLng"]["lng"]!=props.long1)){
                    layer.spliceWaypoints(0, 2);
                    layer.setWaypoints([L.latLng(props.lat, props.long), L.latLng(props.lat1, props.long1)])    
                }
            }
        })
}