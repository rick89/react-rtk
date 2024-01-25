import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/button';
import UpcomingSessions from './upcoming-sessions';

type HeaderProps = {
	onClose: () => void;
};

export const Header: React.FC<HeaderProps> = () => {
	const [upcomingSessionsIsVisible, setUpcomingSessionsIsVisible] =
		useState<boolean>(false);

	function showUpcomingSessions() {
		setUpcomingSessionsIsVisible(true);
	}

	function hideUpcomingSessions() {
		setUpcomingSessionsIsVisible(false);
	}

	return (
		<div id='main-header'>
			{upcomingSessionsIsVisible && (
				<UpcomingSessions onClose={hideUpcomingSessions} />
			)}

			<h1>ReactMentoring</h1>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
							end
						>
							Our Mission
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/sessions'
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
							end
						>
							Browse sessions
						</NavLink>
					</li>
					<li>
						<Button onClick={showUpcomingSessions}>
							Upcoming sessions
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
