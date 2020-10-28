import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="container">
            <FaGithub className="github-logo" />

            <form className="search-form">
                <input type="text" placeholder="Enter Username or repo..." />
            </form>
        </div>
    );
}

export default Header;