import { Link, useParams } from "react-router-dom"
import TripDetail from "../components/Trips/TripDetail";

export default function TripShow({trips, handleSelect}) {
    const { id } = useParams();
    console.log(id);
    const trip = trips.find((trip) => trip.id === parseInt(id));

    if (!trip) {
        return <div>Loading...</div>; // or handle the error as needed
      }

    return (
        <div>
        <TripDetail trip={trip} handleSelect={handleSelect} />
        <Link to=".." relative="path">Zpět na seznam výletů</Link>
        </div>
    )
}