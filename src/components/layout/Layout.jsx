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
        <body class="d-flex flex-column h-100 bg-light">
            <main class="flex-shrink-0">
                <Header />
                <Outlet />
            </main>
            <Footer />
        </body>
    );
};

export default Layout;