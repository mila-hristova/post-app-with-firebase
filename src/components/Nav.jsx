import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/create">Create</NavLink>
        </nav>
    );
}
