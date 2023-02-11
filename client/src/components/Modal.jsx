import "./css/Modal.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark, faCar,faMapLocationDot, faStopwatch } from "@fortawesome/free-solid-svg-icons"

export default function Modal({onClose, open, data}){
    if(!open) return null
    return (
        <div id="modalContainer">
        <div className="topModal"><p>{data.name}</p><button onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button></div>
            <div className="modalContent" id="modalContent">
            <p>{data.description}</p>
            <span><FontAwesomeIcon icon={faCar} /><p> Avalibale Spaces: {data.freespace}</p></span>
            <span><FontAwesomeIcon icon={faMapLocationDot} /><p> Distance:</p></span>
            <span><FontAwesomeIcon icon={faStopwatch} /> <p>Time:</p></span>
            <div><button>Open in google Map</button></div>
            </div>
        </div>
    )
}
