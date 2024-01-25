import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Modal } from '../components/modal';

export default function Root() {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<>
			<Header onClose={() => setShowModal(false)} />
			<Outlet />
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<h1>Modal content</h1>
				</Modal>
			)}
		</>
	);
}
