import L from "leaflet"
import usermarker from "../assets/map-pin.png"

const iconmark = new L.Icon({
    iconUrl: usermarker,
    iconSize: [45,45]
})

export default iconmark