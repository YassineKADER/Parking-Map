import L from "leaflet"
import usermarker from "../assets/map-pin.png"

const iconmark = new L.Icon({
    iconUrl: usermarker,
    iconSize: [40,40]
})

export default iconmark