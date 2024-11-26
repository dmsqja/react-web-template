import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../../styles/styles.css';

const Layout = () => {
    const [isMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMenuOpen]);

    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;