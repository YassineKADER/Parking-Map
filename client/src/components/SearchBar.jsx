import "./css/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useMap } from "react-leaflet";


export default function Searchbar(props){
    function searchParking(infos){
    }
    return (<form id="form" role="search" onSubmit={searchParking}>
    <input type="search" id="query" name="q" placeholder="Search for city, or parking name" aria-label="Search Throw Parkings Positions"/>
    <button type="submit" id="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    
    </form>)
}