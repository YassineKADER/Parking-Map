import "./css/Modal.css"

export default function Modal({onClose, open}){
    if(!open) return null
    return (
        <div id="container">
            <button onClick={onClose}>close modal</button>
            <h1>hello everybody</h1>
        </div>
    )
}
