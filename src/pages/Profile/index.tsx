import React from 'react';

import ProfileData from '../../components/ProfileData';

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

				</div>
			</div>
		</div>
	);
}

export default pages;