import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from "react-leaflet";

import L from "leaflet"

import { useState, useEffect } from "react";
import "./Map.css";

const Recenter = ({lat,lng}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
}

const iconmark = new L.Icon({
    iconUrl: "../assets/map-pin.png",
    iconSize: [45,45]
})


export default function Map() {

  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={8}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https:/rg/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Recenter lat={latitude} lng={longitude}/>
      <Marker position={[latitude, longitude]} icon={iconmark}>
        <Popup>{latitude +" "+ longitude}</Popup>
      </Marker>
    </MapContainer>
  );
}
