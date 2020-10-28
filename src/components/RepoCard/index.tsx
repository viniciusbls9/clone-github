import React from 'react';
import { Link } from 'react-router-dom';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

import './styles.css';

interface Props {
	username: string;
	reponame: string;
	description?: string;
	language?: string;
	stars: number;
	forks: number;
}

const RepoCard: React.FC<Props> = ({
	username,
	reponame,
	description,
	language,
	stars,
	forks,
}) => {

	const languageClass = language ? language.toLowerCase() : 'other';

	return (
		<div className="container-repo-card">
			<div className="top-side">
				<header>
					<RiBookMarkLine />

					<Link to={`/${username}/${reponame}`}>{reponame}</Link>
				</header>
				<p>{description}</p>
			</div>

			<div className="bot-side">
				<ul>
					<li>
						<div className={`language ${languageClass}`}></div>
						<span>{language}</span>
					</li>

					<li>
						<RiStarLine />
						<span>{stars}</span>
					</li>

					<li>
						<AiOutlineFork />
						<span>{forks}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default RepoCard;