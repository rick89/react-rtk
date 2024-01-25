import { Session } from './session-item';
import Button from '../components/button';

type UpcomingSession = {
	onClick: (id: string) => void;
	session: Session;
};

export const UpcomingSession: React.FC<UpcomingSession> = ({
	session,
	onClick,
}) => {
	const { id, title, summary, date } = session;
	return (
		<li>
			<article className='upcoming-session'>
				<div>
					<h3>{title}</h3>
					<p>{summary}</p>
					<time dateTime={new Date(date).toISOString()}>
						{new Date(date).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
						})}
					</time>
				</div>
				<p className='actions'>
					<Button textOnly onClick={() => onClick(id)}>
						Cancel
					</Button>
				</p>
			</article>
		</li>
	);
};
