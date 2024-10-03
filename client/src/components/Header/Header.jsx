import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header(){
    return (
        <header>
            <h1>Trip Planner</h1>
            <ul className={classes.nav}> 
                <li>
                    <NavLink to="/"
                    className={({ isActive }) => (isActive ? classes.active : undefined)}
                    >
                        Home
                    </NavLink>
                    end  {/* this link is considered active when the current URL starts with the link's URL */}
                </li>
                <li>
                    <NavLink to="/trips"
                    className={({ isActive }) => (isActive ? classes.active : undefined)}
                    >
                        Výlety
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}