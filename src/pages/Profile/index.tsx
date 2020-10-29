import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import './styles.css';

const pages: React.FC = () => {
	return (
		<div className="container-profile">
			<div className="main">
				<div className="left-side">
					<ProfileData
						username={'viniciusbls9'}
						name={'VInicius Benedito'}
						avatarUrl={'https://avatars1.githubusercontent.com/u/40433674?v=4'}
						followers={887}
						following={7}
						company={'Rocketseat'}
						location={'São Paulo, Brazil'}
						email={'beneditoloura@gmail.com'}
						blog={undefined}
					/>
				</div>

				<div className="right-side">
					<div className="repos">
						<h2>Random repos</h2>

						<div>
							{[1, 2, 3, 4, 5, 6].map(n => (
								<RepoCard
									key={n}
									username={'viniciusbls9'}
									reponame={'whatsappclone'}
									description={'whatsappclone'}
									language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
									stars={8}
									forks={4}
								/>
							))}
						</div>
					</div>

					<span className="calendar-heading">random calendar (do not represent actual data)</span>

					<RandomCalendar />

				</div>
			</div>
		</div>
	);
}

export default pages;