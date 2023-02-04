import "./css/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Searchbar(){
    return (<form id="form" role="search">
    <input type="search" id="query" name="q" placeholder="Search for city, or parking name" aria-label="Search Throw Parkings Positions"/>
    <button type="submit" id="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    
    </form>)
}