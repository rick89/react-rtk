import Button from '../components/button';

export type Session = {
	id: string;
	title: string;
	summary: string;
	image: string;
	date: string;
};

interface SessionItemProps {
	session: Session;
}

export const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
	const { id, title, summary, image } = session;

	return (
		<article className='session-item'>
			<img src={image} alt={title} />
			<div className='session-data'>
				<div>
					<h3>{title}</h3>
					<p>{summary}</p>
				</div>
				<p className='actions'>
					<Button to={id}>Learn More</Button>
				</p>
			</div>
		</article>
	);
};
