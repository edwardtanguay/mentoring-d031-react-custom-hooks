import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);
	const [projectIsCompleted, toggleProjectIsCompleted] = useToggle(true);

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

			<div className="projectIsCompletedArea">
				<div className="message">
					{projectIsCompleted ? (
						<p>Project is completed.</p>
					) : (
						<p>Project is NOT COMPLETED.</p>
					)}
				</div>
				<div className="buttonArea">
					<button onClick={toggleProjectIsCompleted}>Toggle</button>
				</div>
			</div>

		</div>
	);
};
