import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

import './styles.css';

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate(`/${search.toLowerCase().trim()}`);
    }

    function toggleTheme() {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="container">
            <FaGithub className="github-logo" onClick={toggleTheme} />

            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username or repo..."
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                />
            </form>
        </div>
    );
}

export default Header;