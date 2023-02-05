import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function Routing(props) {
        console.log(props.lat)
    const map = useMap();
    const route = L.Routing.control({
      waypoints: [L.latLng(props.lat,props.long), L.latLng(30, -7)],
      fitSelectedRoutes: true,
      draggableWaypoints: false,
      routeWhileDragging: false,
      createMarker: function() { return null; }
    }).addTo(map);
    var routingControlContainer = route.getContainer();
    var controlContainerParent = routingControlContainer.parentNode;
    controlContainerParent.removeChild(routingControlContainer);
    console.log(routingControlContainer)
  return null;
}
