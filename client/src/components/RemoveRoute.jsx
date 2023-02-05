import { useMap } from "react-leaflet";

export default function Removeroute(props) {
    if(props.delete == true){
  const map = useMap();
  map.eachLayer((layer) => {
    if (layer.options.waypoints && layer.options.waypoints.length) {
      layer.spliceWaypoints(0, 2);
      map.removeLayer(layer);
    }
  });}
}
