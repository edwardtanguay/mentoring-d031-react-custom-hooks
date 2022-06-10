import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);

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
