import "./css/Recenter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMap } from "react-leaflet";
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

export default function RecenterBtn(props){
    const map = useMap();
    function centerto(){
        map.flyTo([props.lat, props.lng]);
    }
    return (<button className="recenterbtn" onClick={centerto}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>)
}