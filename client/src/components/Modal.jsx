import "./css/Modal.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Modal({onClose, open, name}){
    if(!open) return null
    return (
        <div id="modalContainer">
        <div className="topModal"><p>{name}</p><button onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button></div>
            <div className="modalContent" id="modalContent">
            </div>
        </div>
    )
}
