import { Card } from "../components";
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"
import Loading from "../components/Loading";

export const MovieList = ({api_path , query="",title}) => {
  const apiKey=process.env.REACT_APP_API_KEY;

  useTitle(title)
  let { data, loading } = useFetch(`https://api.themoviedb.org/3${api_path}?api_key=${apiKey}&q=${query}`)
  let movies=data.results
  return (
    <main  >
      {loading && <Loading/> }
      {!loading && <section className="max-w-7xl mx-auto py-16 px-4 md:px-0 ">
        <div className="flex flex-wrap justify-center other:justify-start ">
          {movies && movies.map(movie=>(
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>}
    </main>
  );
};

export default MovieList;
