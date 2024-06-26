import { useState, useMemo, useRef, useCallback } from 'react';
import { searchMovies } from '../services/movies.js';

export function useMovies({ search, sort, sortBy }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const previousSearch = useRef(search);

	const getMovies = useCallback(async ({ search }) => {
		if (search === previousSearch.current) return;
		try {
			setLoading(true);
			setError(null);
			previousSearch.current = search;
			const newMovies = await searchMovies({ search });
			setMovies(newMovies || []);
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const sortedMovies = useMemo(() => {
		if (!sort || !Array.isArray(movies)) return movies;

		const sorted = [...movies];
		if (sortBy === 'title') {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortBy === 'year') {
			sorted.sort((a, b) => b.year - a.year);
		}
		return sorted;
	}, [sort, sortBy, movies]);

	return { movies: sortedMovies, getMovies, loading, error };
}
