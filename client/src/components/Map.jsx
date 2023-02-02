import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import "./Map.css"



export default function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true} zoomControl={false} >
      <TileLayer
        attribution='&copy; <a href="https:/rg/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright"/>
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty C3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
