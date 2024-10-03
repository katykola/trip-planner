import TagButton from "../Utils/TagButton";
import TripTile from "./TripTile";
import { Link } from "react-router-dom";

export default function TripList({ trips, handleSelect }) {
    return (
      <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "1rem" }}>
        {trips.map((trip) => (
          <TripTile trip={trip} handleSelect={handleSelect}/>
        ))}
      </div>
    );
  }