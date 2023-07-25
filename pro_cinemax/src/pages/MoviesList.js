
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";

export const MoviesList = (apiPath) => {
  const {data: movies} = useFetch(apiPath)

    return (
      <main>
        <section className= "py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map ((movie)=> {
              return <Card movie= {movie} key = {movie.id}/>
            })} 

          </div>
        </section>
      </main>
    )
  }
  