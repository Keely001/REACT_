import {Routes, Route} from "react-router-dom"
import { MovieDetail, MoviesList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800 ">
        <Routes>
            <Route path="" element={<MoviesList/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movie/popular" element={<MoviesList/>}/>
            <Route path="movie/top" element={<MoviesList/>}/>
            <Route path="movie/upcoming" element={<MoviesList/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
