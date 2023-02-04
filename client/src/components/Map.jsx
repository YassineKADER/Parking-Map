import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet"
import Recenter from "./Recenter.jsx";
import iconmark from "./Usermarker.jsx";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "./db_info.jsx";
import "./css/Map.css";
import greenMarker from "./GreenMarker.jsx";
import redMarker from "./Redmarker.jsx";
import Searchbar from "./SearchBar.jsx";



export default function Map() {
  const [markersinfo, setMarkersInfo] = useState([]);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  useEffect(() => {
    const firebase = initializeApp(firebaseConfig);
    const db = getDatabase(firebase);
    const useref = ref(db, "Users");
    onValue(useref, (data => {
          setMarkersInfo(Object.values(data.val()));
      }))
    navigator.geolocation.watchPosition((position) => {
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
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https:/rg/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Searchbar></Searchbar>
      <Recenter lat={latitude} lng={longitude}/>
      <Marker position={[latitude, longitude]} icon={iconmark}>
        <Popup>{latitude +" "+ longitude}</Popup>
      </Marker>
      {markersinfo.map(value => <Marker position={[+value["location"]["latitude"], +value["location"]["longitude"]]} icon={(value["freespace"]>0) ? greenMarker : redMarker}></Marker>)}
    </MapContainer>
  );
}
