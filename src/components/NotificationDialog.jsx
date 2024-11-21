import React, { useEffect, useState } from 'react';
import Container from './Container';
import { Dialog } from 'primereact/dialog';

export default function NotificationDialog({ notification = {} }) {
	const {
		header = 'Header title',
		message = 'Notification message.',
		status = false,
	} = notification;
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(status);

		const timerId = setTimeout(() => {
			setVisible(false);
		}, 2000); // 5 sec
		return () => {
			clearTimeout(timerId);
		};
	}, [notification]);

	return (
		<Container>
			<Dialog
				header={header}
				visible={visible}
				style={{ width: '50vw' }}
				onHide={() => {
					if (!visible) return;
					setVisible(status);
				}}
			>
				<p className="m-0">{message}</p>
			</Dialog>
		</Container>
	);
}
