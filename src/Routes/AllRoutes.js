import { Route,Routes } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  
  return (
    <div >
      <Routes>
        <Route path="/" element={<MovieList api_path={"/movie/now_playing"} title="Home"/>}/>
        <Route path="/movies/:id" element={<MovieDetail api_path={"/movie/"} />}/>
        <Route path="/movies/popular" element={<MovieList api_path={"/movie/popular"} title="Popular"/>}/>
        <Route path="/movies/upcoming" element={<MovieList api_path={"/movie/upcoming"} title="Upcoming"/>}/>
        <Route path="/movies/top" element={<MovieList api_path={"/movie/top_rated"} title="Top"/>}/>
        <Route path="/search/movie" element={<Search api_path={`/search/movie`} title="Search"/>}/>
        <Route path="*" element={<PageNotFound title="page not found"/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
