import { useFetch } from '../hooks/useFetch';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';
const verbsUrl = 'https://edwardtanguay.netlify.app/share/germanNouns.json';

export const PageUseFetch = () => {
	const {
		items: techBooks,
		totalItems: totalTechBooks,
		isLoading: techBooksAreLoading,
	} = useFetch(techBooksUrl, true);

	return (
		<div className="page_useFetch">
			<h2>useFetch</h2>
			<p>Tech Books</p>
			{techBooksAreLoading ? (
				<h3>Tech books are loading...</h3>
			) : (
				<>
					<h3>There are {totalTechBooks} tech books.</h3>
					<ul>
						{techBooks.map((techBook, index) => {
							return <li key={index}>{techBook.title}</li>;
						})}
					</ul>
				</>
			)}
		</div>
	);
};
