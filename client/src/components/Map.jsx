import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet"
import Recenter from "./Recenter.jsx";
import iconmark from "./Usermarker.jsx";

import { useState, useEffect } from "react";
import "./Map.css";



export default function Map() {

  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https:/rg/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter lat={latitude} lng={longitude}/>
      <Marker position={[latitude, longitude]} icon={iconmark}>
        <Popup>{latitude +" "+ longitude}</Popup>
      </Marker>
    </MapContainer>
  );
}
