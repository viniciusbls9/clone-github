import React from 'react';
import { Link } from 'react-router-dom';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

import './styles.css';

const Repo: React.FC = () => {
	return (
		<div className="container-repo">
			<div className="breadcumb">
				<RiBookMarkLine />
				<Link className={'username'} to={'/viniciusbls9'}>
					viniciusbls9
				</Link>
				<span>/</span>
				<Link className={'reponame'} to={'viniciusbls9/financeapp'}>
					financeapp
				</Link>
			</div>

			<p>Aplicativo para controle de finanças pessoais</p>

			<ul className="stats">
				<li>
					<RiStarLine />
					<b>9</b>
					<span>stars</span>
				</li>

				<li>
					<AiOutlineFork />
					<b>0</b>
					<span>forks</span>
				</li>
			</ul>

			<a href={'https://github.com/viniciusbls9/financeapp'} className="link-button">
				<FaGithub />
				<span>View on Github</span>
			</a>
		</div>
	);
}

export default Repo;