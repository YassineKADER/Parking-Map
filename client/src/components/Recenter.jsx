import { useMap } from "react-leaflet";
import { useEffect } from "react";

const Recenter = ({lat,lng}) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo([lat, lng]);
    }, [lat, lng]);
    return null;
}

export default Recenter