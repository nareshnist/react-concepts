
import { Link } from "react-router-dom";
import './header.css';

export function Header() {

    const userid  = 10
    return (
        <nav>
            <ul>

                {/* Html Navigation. */}

                <li><Link to="/">Home </Link></li>
                <li><Link to='/about'>About us</Link></li>

                <li><Link to="/contact">Contact us</Link></li>
                <li><a href="/contact">Contact us with anchor tage</a></li>
                {/* Observe the browser it will get refreshed  */}

                <li><Link to="/user">User</Link></li>
                <li><Link to={`dynamic-route-parames/${userid}/xyz?name=naresh`}>User Pr</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
    );
}