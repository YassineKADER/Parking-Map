import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet"
import Recenter from "./Recenter.jsx";
import iconmark from "./Usermarker.jsx";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue} from "firebase/database"
import { useState, useEffect } from "react";
import "./Map.css";

const firebaseConfig = {
    apiKey: "AIzaSyBgGx67w032_zncuZ37tFYPrm02rH1XbrY",
    authDomain: "wise-baton-353710.firebaseapp.com",
    databaseURL: "https://wise-baton-353710-default-rtdb.firebaseio.com",
    projectId: "wise-baton-353710",
    storageBucket: "wise-baton-353710.appspot.com",
    messagingSenderId: "962857669223",
    appId: "1:962857669223:web:3360987f13c2f1e6787ac2"
};

const firebase = initializeApp(firebaseConfig)
const db = getDatabase(firebase)
const useref = ref(db,"Users")
onValue(useref, (data) => {
    console.log(data.val())
})

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
