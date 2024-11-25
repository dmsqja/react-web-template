import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import '../../styles/layout.css';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="layout">
            <Header setIsMenuOpen={setIsMenuOpen} />
            <main className="main-content">
                <div className="page-container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;