import { useParams } from 'react-router-dom';
import { addUpcomingSession } from '../store/upcoming-sessions-slice.ts';
import { SESSIONS } from '../dummy-sessions.ts';
import {
	useUpcomingSessionsDispatch,
	useUpcomingSessionsSelector,
} from '../store/hooks.ts';
import { Session } from '../components/session-item.tsx';
import Button from '../components/button.tsx';

export default function SessionPage() {
	const params = useParams<{ id: string }>();
	const dispatch = useUpcomingSessionsDispatch();
	const sessionId = params.id;
	const loadedSession = SESSIONS.find((session) => session.id === sessionId);
	const upcomingSessions = useUpcomingSessionsSelector(
		(state) => state.upcomingSessions.upcomingSessions
	);
	const sessionIsBooked = upcomingSessions.some(
		(session) => session.id === sessionId
	);

	if (!loadedSession) {
		return (
			<main id='session-page'>
				<p>No session found!</p>
			</main>
		);
	}

	function handleClick(session: Session) {
		dispatch(addUpcomingSession(session));
	}

	return (
		<main id='session-page'>
			<article>
				<header>
					<img src={loadedSession.image} alt={loadedSession.title} />
					<div>
						<h2>{loadedSession.title}</h2>
						<time
							dateTime={new Date(
								loadedSession.date
							).toISOString()}
						>
							{new Date(loadedSession.date).toLocaleDateString(
								'en-US',
								{
									day: 'numeric',
									month: 'short',
									year: 'numeric',
								}
							)}
						</time>
						<p>
							<Button
								disabled={sessionIsBooked}
								onClick={() => handleClick(loadedSession)}
							>
								{sessionIsBooked ? 'Booked' : 'Book Session'}
							</Button>
						</p>
					</div>
				</header>
				<p id='content'>{loadedSession.description}</p>
			</article>
		</main>
	);
}
