import { Link } from "react-router-dom";
import noimage  from "../assets/noImage.png"
export const Card = ({movie}) => {

  // Designing image in case there is no image available
  const imageStyle = {
    width: '500px',
    height: '500px'
  };
  
  return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movies/${movie.id}`}>
          <img
            className="rounded-t-lg"
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: noimage}
            alt=""
            style={imageStyle}
          />
        </Link>
        <div className="p-3 md:p-5">
          <Link to={`/movies/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </Link>
          <p className="hidden sm:block mb-2 text-sm md:text-base text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </div>
      </div>
  );
};

export default Card;
