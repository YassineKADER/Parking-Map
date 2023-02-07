import "./css/SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useMap } from "react-leaflet";


export default function Searchbar(props){
    const map = useMap();
    function searchParking(event){
        event.preventDefault();
        let index=false;
        name = document.getElementById("query").value;
        props.parkingsinfo.forEach((parking)=>{
            if(parking.name.toLowerCase().includes(name.toLowerCase()) || parking.location.city.toLowerCase().includes(name.toLowerCase())){
                if(parking.freespace>0){
                    map.setZoom(9)
                    map.flyTo([parking.location.latitude,parking.location.longitude]);
                    index=true;
                    return;
                }
            }
        })
        if(index==false){
            document.getElementById("message").className="show";
                setTimeout(()=>{
                    document.getElementById("message").className="hide";
                }, 1500)
                
        }
    }
    return (<form id="form" role="search" onSubmit={searchParking}>
    <input type="search" id="query" name="q" placeholder="Search for city, or parking name" aria-label="Search Throw Parkings Positions"/>
    <button type="submit" id="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    <p id="message" className="hide">No parkings found on this city</p>
    </form>)
}