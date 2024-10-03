import { Link } from "react-router-dom";
import TripList from "../components/Trips/TripList";

export default function Home({trips, handleSelect}) {
    return(
        <div>
            <h1>Vítejte na stránce s výlety</h1>
            <p>Naplánuj si výlet podle sebe a sdílej ho s rodinou nebo přáteli.</p>
            <TripList trips={trips} handleSelect={handleSelect} />
            <p>Jdi na<Link to="/trips">seznam všech výletů</Link></p>
        </div>
    )
}