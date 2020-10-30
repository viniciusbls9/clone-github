import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RiBookMarkLine } from 'react-icons/ri';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import './styles.css';
import { APIUser, APIRepo } from '../../@types';

interface Data {
	user?: APIUser;
	repos?: APIRepo[];
	error?: string;
}

const Profile: React.FC = () => {
	const { username = 'viniciusbls9' } = useParams();
	const [data, setData] = useState<Data>();

	useEffect(() => {
		Promise.all([
			fetch(`https://api.github.com/users/${username}`),
			fetch(`https://api.github.com/users/${username}/repos`),
		]).then(async (responses) => {
			const [userResponse, reposResponse] = responses;

			if (userResponse.status === 404) {
				setData({ error: 'User not found!' });
				return;
			}
			const user = await userResponse.json();
			const repos = await reposResponse.json();

			const shuffledRepos = repos.sort(() => 0.50 - Math.random());
			const slicedRepos = shuffledRepos.slice(0, 6);

			setData({
				user,
				repos: slicedRepos,
			});

		})
	}, [username]);

	if (data?.error) {
		return <h1>{data.error}</h1>
	}

	if(!data?.user || !data?.repos) {
		return <h1>Loading....</h1>
	}

	const TabContent = () => (
		<div className="content">
			<RiBookMarkLine />
			<span className="label">Repositories</span>
			<span className="number">{data.user?.public_repos}</span>
		</div>
	)

	return (
		<div className="container-profile">

			<div className="desktop">
				<div className="wrapper">
					<span className="offset"></span>
					<TabContent />
				</div>
				<span className="line-desktop"></span>
			</div>

			<div className="main">
				<div className="left-side">
					<ProfileData
						username={data.user.login}
						name={data.user.name}
						avatarUrl={data.user.avatar_url}
						followers={data.user.followers}
						following={data.user.following}
						company={data.user.company}
						location={data.user.location}
						email={data.user.email}
						blog={data.user.blog}
					/>
				</div>

				<div className="right-side">
					<div className="tab mobile">
						<TabContent />
						<span className="line"></span>
					</div>
					<div className="repos">
						<h2>Random repos</h2>

						<div>
							{data.repos.map((item) => (
								<RepoCard
									key={item.name}
									username={item.owner.login}
									reponame={item.name}
									description={item.description}
									language={item.language}
									stars={item.stargazers_count}
									forks={item.forks}
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

export default Profile;