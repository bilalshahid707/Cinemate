import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import Loading from "../components/Loading";
export const MovieDetail = ({ api_path }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  let { id } = useParams();
  let { data, loading } = useFetch(
    `https://api.themoviedb.org/3${api_path}${id}?api_key=${apiKey}`
  );
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(data);
  }, [data]);
  useTitle(movie.title);

  return (
    <main>
      {loading && <Loading />}
      {!loading && (
        <section className="max-w-7xl px-3  mx-auto xs:px-4 py-16 lg:px-4 ">
          <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-around lg:items-start lg:gap-0 text-black dark:text-white">
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>

            <div className="max-w-2xl flex flex-col gap-y-4 text-lg">
              <h1 className="text-3xl lg:text-4xl font-bold">{movie.title}</h1>
              <p className="text-base lg:text-lg ">{movie.overview}</p>
              <div className="flex gap-2 flex-wrap">
                {movie.genres &&
                  movie.genres.map((movie_genre) => (
                    <p key={movie_genre.id} className="p-2 border border-gray-600 rounded-md text-base lg:textlg ">
                      {movie_genre.name}
                    </p>
                  ))}
              </div>
              <div className="flex items-center text-base lg:text-lg">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 font-bold text-gray-900 dark:text-white text-base lg:text-lg">
                  {movie.vote_average}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400 "></span>
                <p className=" font-medium text-gray-900 dark:text-white text-base lg:text-lg">
                  {movie.vote_count} reviews
                </p>
              </div>
              <p className="text-base lg:text-lg">
                <strong>Runtime:</strong> {movie.runtime} min
              </p>
              <p className="text-base lg:text-lg">
                <strong>Budget:</strong> {movie.budget}
              </p>
              <p className="text-base lg:text-lg">
                <strong>Revenue:</strong> {movie.revenue}
              </p>
              <p className="text-base lg:text-lg"> 
                <strong>Release Date</strong>: {movie.release_date}
              </p>
              <a className="text-base lg:text-lg" href={movie.homepage}>
                <strong>IMDB code:</strong> {movie.imdb_id}
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default MovieDetail;
