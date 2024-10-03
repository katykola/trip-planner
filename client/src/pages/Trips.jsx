import TripList from "../components/Trips/TripList"

export default function Trips({trips, handleSelect}){
    return (
        <div>
            <h1>Seznam všech výletů</h1>
            <p>Zde najdeš seznam všech výletů, které sis naplánoval/a.</p>
            <TripList trips={trips} handleSelect={handleSelect}/>
        </div>
    )
}