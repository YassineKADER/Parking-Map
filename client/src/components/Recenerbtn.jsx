import "./css/Recenter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

export default function RecenterBtn(props){
    return (<button className="recenterbtn" onClick={props.handelclick}><FontAwesomeIcon icon={faLocationCrosshairs} /></button>)
}