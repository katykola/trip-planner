import TagButton from "../Utils/TagButton";

export default function TripDetail({trip, handleSelect}) {
    return (
        <div>
            <h1>{trip.name}</h1>
            <TagButton tags={trip.tags} onSelect={handleSelect} />          
            <p>{trip.description}</p>
            <img style={{ "width": "500px" }} src={trip.image} alt="" />
            {trip.destinations.map((destination) => (
                <div key={destination.name}>
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                    <h3>Odkazy na zdroje:</h3>
                    <a href={destination.sourceLinks}>{destination.sourceLinks}</a>
                    <h3>Odkazy na mapy:</h3>
                    <a href={destination.mapLinks}>{destination.mapLinks}</a>
                </div>
            ))}            
        </div>
    )
}