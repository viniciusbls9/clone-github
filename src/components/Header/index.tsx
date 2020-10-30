import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



import './styles.css';

const Header: React.FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate(`/${search.toLowerCase().trim()}`);
    }

    return (
        <div className="container">
            <FaGithub className="github-logo" />

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