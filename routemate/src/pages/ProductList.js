import {useSearchParams} from "react-router-dom"

export const ProductList = () => {
  const [searchParams] = useSearchParams();
    return (
      <div className="component" >ProductList</div>
    )
  }