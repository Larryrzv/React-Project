const API_KEY = '4287ad07';

export const searchMovies = async ({ search }) => {
	if (!search) return null;

	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
		);
		const json = await response.json();

		if (!json.Search) {
			throw new Error('No movies found');
		}

		return json.Search.filter((item) => item.Type === 'movie').map(
			({ imdbID, Title, Type, Year, Poster }) => ({
				id: imdbID,
				title: Title,
				type: Type,
				year: Year,
				poster: Poster,
			})
		);
	} catch (e) {
		throw new Error(`Error searching movies: ${e.message}`);
	}
};
