import "./css/Recenter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

export default function RecenterBtn(){
    return (<button className="recenterbtn"><FontAwesomeIcon icon={faLocationCrosshairs} /></button>)
}