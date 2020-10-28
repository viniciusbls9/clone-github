import React from 'react';
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';

import './styles.css';

interface Props {
    username: string;
    name: string;
    avatarUrl: string;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}

const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
    return (
        <div className="container-profile-data">
            <div className="flex">
                <img src={avatarUrl} alt={username} className="avatar" />

                <div>
                    <h1>{name}</h1>
                    <h2>{username}</h2>
                </div>
            </div>

            <ul className="row">
                <li>
                    <RiGroupLine />
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </ul>

            <ul className="column">
                {company && (
                    <li>
                        <RiBuilding4Line />
                        <span>{company}</span>
                    </li>
                )}

                {location && (
                    <li>
                        <RiMapPin2Line />
                        <span>{location}</span>
                    </li>
                )}

                {email && (
                    <li>
                        <RiMailLine />
                        <span>{email}</span>
                    </li>
                )}

                {blog && (
                    <li>
                        <RiLinksLine />
                        <span>{blog}</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ProfileData;