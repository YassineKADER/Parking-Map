import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

export default function Routing() {
    const map = useMap();
    const route = L.Routing.control({
      waypoints: [L.latLng(0,0), L.latLng(0,0)],
      fitSelectedRoutes: true,
      draggableWaypoints: false,
      addWaypoints: false,
      autoRoute: true,
      useZoomParameter:true,
      showAlternatives:true,
      routeWhileDragging: false,
      lineOptions: {
        styles: [{color: '#3366ff', opacity: 0.6, weight: 5, stroke:true}]
     },
      createMarker: function() { return null; }
    }).addTo(map);
    var routingControlContainer = route.getContainer();
    var controlContainerParent = routingControlContainer.parentNode;
    controlContainerParent.removeChild(routingControlContainer);
  return null;
}
