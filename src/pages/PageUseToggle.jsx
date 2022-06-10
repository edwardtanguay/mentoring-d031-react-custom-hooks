import { useState } from 'react';

export const PageUseToggle = () => {
	const [userIsOnline, setUserIsOnline] = useState(false);
	const toggleUserIsOnline = () => {
		const _userIsOnline = userIsOnline ? false : true;
		setUserIsOnline(_userIsOnline);
	}
	return (
		<div className="page_useToggle">
			<h2>UseToggle</h2>
			<div className="userIsOnlineArea">
				<div className="message">
					{userIsOnline ? (
						<p>User is currently online</p>
					) : (
						<p>User is OFFLINE.</p>
					)}
				</div>
				<div className="buttonArea">
					<button onClick={toggleUserIsOnline}>Toggle</button>
				</div>
			</div>
		</div>
	);
};
