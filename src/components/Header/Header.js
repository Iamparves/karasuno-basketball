import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="navbar">
                <Container>
                    <nav className="navbar__nav w-100">
                        <h2 className="navbar__logo text-center"><FontAwesomeIcon icon={faBasketballBall} /> Karasuno Basketball</h2>
                    </nav>
                </Container>
            </div>
        </header>
    );
};

export default Header;