export const PageUseToggle = () => {

	const userIsOnline = false;
	return (
		<div className="page_useToggle">
			<h2>UseToggle</h2>
			{userIsOnline ? (
				<p>User is currently online</p>
			) : (
				<p>User is OFFLINE.</p>
			)}
		</div>
	);
};
