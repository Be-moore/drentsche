import { Link,BrowserRouter } from 'react-router-dom';

const NavBar = () => {
    return <div>
    
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lessons">Ablessonsout</Link>
            </li>
            <li>
                <Link to="/management">management</Link>
            </li>
            <li>
                <Link to="/members">members</Link>
            </li>
            <li>
                <Link to="/agenda">agenda</Link>
            </li>
            <li>
                <Link to="/sponsors">sponsors</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
    </nav>
       
    </div>
}

export default NavBar;