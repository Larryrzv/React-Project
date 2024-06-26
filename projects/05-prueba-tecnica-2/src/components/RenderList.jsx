export function RenderMovieResult({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <span>{movie.type}</span>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export function RenderNullResult() {
  return <p>No se han encontrado nada en su busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovie = movies?.length > 0;

  return hasMovie ? (
    <RenderMovieResult movies={movies} />
  ) : (
    <RenderNullResult />
  );
}
