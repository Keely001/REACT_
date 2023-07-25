import {Routes, Route} from "react-router-dom"
import { MovieDetail, MoviesList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="" element={<MoviesList apiPath= "movie/now_playing"/>}/>
            <Route path="movie/:id" element={<MovieDetail />}/>
            <Route path="movie/popular" element={<MoviesList apiPath="movie/popular" />}/>
            <Route path="movie/top" element={<MoviesList apiPath="movie/top_rated"/>}/>
            <Route path="movie/upcoming" element={<MoviesList apiPath ="movie/upcoming"/>}/>
            <Route path="search" element={<Search apiPath= "search/movie"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
