import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/layout.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

    return(
        <header className="header">
            <div className="header-container">
                <NavLink to="/home" className="brand">
                    <span className="brand-text">Start Bootstrap</span>
                </NavLink>

                <button
                    className="menu-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="navMenu"
                >
                    <span className="toggler-icon"></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`} id="navMenu" >
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/calendar" className="nav-link">Calendar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/calendar_2" className="nav-link">Calendar(Google)</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/meeting" className="nav-link">Meeting</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <button
                                onClick={handleLogout}
                                className="nav-link logout-btn"
                            >
                                <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;