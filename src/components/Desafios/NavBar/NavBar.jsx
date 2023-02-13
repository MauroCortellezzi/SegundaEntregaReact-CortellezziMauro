import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import technology from "../../../assets/technology.jpg"
import {NavLink, Link} from 'react-router-dom';


export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={technology} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
            <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/TV">TV</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/PC">PC</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/TABLET">TABLET</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
