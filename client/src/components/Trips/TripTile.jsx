import TagButton from "../Utils/TagButton";
import { Link } from "react-router-dom";

export default function TripTile({ trip, handleSelect }) {
    return (
        <div style={{ "border": "1px solid lightgrey", "padding": "1rem", "width": "300px" }} key={trip._id}>
            <img style={{ "width": "300px", "height": "200px" }} src={trip.image} alt={trip.name} />
            <TagButton tags={trip.tags} onSelect={handleSelect} />          
            <Link to={`/trips/${trip.id}`}>
                <h3>{trip.name}</h3>
            </Link>
            <p>{trip.description}</p>
        </div>
    )
}