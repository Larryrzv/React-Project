import { useEffect, useState, useRef } from 'react';
import './App.css';
import { Movies } from './components/RenderList';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';
import { useCallback } from 'react';

function useSearch() {
	const [search, updateSearch] = useState('');
	const [error, setError] = useState(null);
	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === '';
			return;
		}

		if (search === '') {
			setError('No se puede buscar una película vacía');
			return;
		}

		if (search.match(/^\d+$/)) {
			setError('No se puede buscar una película con un número');
			return;
		}

		if (search.length < 3) {
			setError('La búsqueda debe tener al menos 3 caracteres');
			return;
		}

		setError(null);
	}, [search]);

	return { search, updateSearch, error };
}

function App() {
	const [sort, setSort] = useState(false);
	const [sortBy, setSortBy] = useState('');
	const { search, updateSearch, error } = useSearch();
	const { movies, loading, getMovies } = useMovies({ search, sort, sortBy });

	const debounceGetMovies = useCallback(
		debounce((search) => {
			console.log('search', search);
			getMovies({ search });
		}, 300),
		[getMovies]
	);

	const handleChange = (event) => {
		const newSearch = event.target.value;
		updateSearch(newSearch);
		debounceGetMovies(newSearch);
	};
	const handleSort = (e) => {
		setSort(!sort);
		setSortBy(e.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		getMovies({ search });
	};

	return (
		<div className='page'>
			<header>
				<h1>Peliculero.3</h1>
				<form onSubmit={handleSubmit} className='form'>
					<input
						onChange={handleChange}
						value={search}
						name='search'
						placeholder='One piece Film Red, Matrix, Avengers'
						className='input'
					/>
					<div>
						<ul>
							<label>
								<input
									type='checkbox'
									value='title'
									checked={sort && sortBy === 'title'}
									onChange={handleSort}
								/>
								<p>Ordenar Alfabeticamente</p>
							</label>
							<label>
								<input
									type='checkbox'
									value='year'
									checked={sort && sortBy === 'year'}
									onChange={handleSort}
								/>
								<p>Ordenar por año</p>
							</label>
						</ul>
						<button type='submit'>buscar</button>
					</div>
				</form>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</header>

			<main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
		</div>
	);
}

export default App;
