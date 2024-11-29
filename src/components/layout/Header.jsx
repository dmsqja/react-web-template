import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';
import '../../styles/responsive-nav.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userInfo');
        navigate('/login', { replace: true });
    };

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div class="container px-5">
                <a class="navbar-brand" href="index.html">
                    <span class="fw-bolder text-primary">Start Bootstrap</span>
                </a>
                <button class="navbar-toggler" onClick={toggleMenu}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`collapse navbar-collapse ${isOpen ? 'active' : ''}`} id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/resume">Resume</a></li>
                        <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="/calendar">FullCalendar</a></li>
                        <li class="nav-item"><a class="nav-link" href="/bigcalendar">BigCalendar</a></li>
                        <li class="nav-item"><a class="nav-link" href="/kakaomap">KakaoMap</a></li>
                        <li class="nav-item">
                            <button
                                onClick={handleLogout}
                                class="nav-link"
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;