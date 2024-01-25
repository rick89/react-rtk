import { useEffect, useRef, type ReactNode } from 'react';
import {
	useUpcomingSessionsSelector,
	useUpcomingSessionsDispatch,
} from '../store/hooks.ts';
import { Modal, type ModalHandle } from './modal.tsx';
import Button from './button.tsx';
import { removeUpcomingSession } from '../store/upcoming-sessions-slice.ts';
import { UpcomingSession } from './upcoming-session.tsx';
import { randomId } from '../utils.ts';

type UpcomingSessionsProps = {
	onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
	const modal = useRef<ModalHandle>(null);
	const upcomingSessions = useUpcomingSessionsSelector(
		(state) => state.upcomingSessions.upcomingSessions
	);
	const dispatch = useUpcomingSessionsDispatch();

	// useEffect is used to open the Modal via its exposed `open` method when the component is mounted
	useEffect(() => {
		if (modal.current) {
			modal.current.open();
		}
	}, []);

	function handleRemoveClick(id: string) {
		dispatch(removeUpcomingSession(id));
	}

	let content: ReactNode;

	content = (
		<ul>
			{upcomingSessions.map((session) => {
				return (
					<UpcomingSession
						key={randomId()}
						session={session}
						onClick={(id) => handleRemoveClick(id)}
					/>
				);
			})}
		</ul>
	);

	if (upcomingSessions.length === 0) {
		content = <p>No upcoming sessions</p>;
	}

	return (
		<Modal ref={modal} onClose={onClose}>
			<h2>Upcoming Sessions</h2>

			{content}

			<p className='actions'>
				<Button onClick={onClose}>Close</Button>
			</p>
		</Modal>
	);
}
