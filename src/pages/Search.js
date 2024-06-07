import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"
import Loading from "../components/Loading";
export const Search = ({ api_path,title,loading }) => {
  useTitle(title)
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('query')

  let { data } = useFetch(`https://api.themoviedb.org/3${api_path}?api_key=${apiKey}&query=${queryTerm}`)
  let movies=data.results
  return (
    <main>
      {loading && <Loading/>}
      {!loading && <section className="px-16 py-8 text-4xl text-black font-bold dark:text-white">{movies && movies.length===0 ? `No results for "${queryTerm}"` : `Results for "${queryTerm}"`}
      </section>}
      
      {!loading && <section className="max-w-7xl mx-auto py-16 px-4 md:px-0 ">
        <div className="flex flex-wrap justify-center other:justify-start ">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>}
    </main>
  );
};

export default Search;
