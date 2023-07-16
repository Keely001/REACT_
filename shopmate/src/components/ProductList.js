import {  useState } from "react"
import {useFetch} from "../hooks/useFetch"

function ProductList() {
    const [url, setUrl] = useState("http://localhost:4000/product")
    const {data:products, loading} = useFetch(url);

    // const fetchProducts = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    // }, [url])
    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]);
  return (
    <section>
        <button onClick={() => setUrl("http://localhost:4000/product")}>All</button>
        <button onClick={() => setUrl('http://localhost:4000/product?in_stock=true')}> Stock Only</button>
        {loading && <p>Loading products......</p>}
        {products && products.map((product) => {
            return (<div className="card" key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>
            <span>${product.in_stock? product.price : "Nil"} </span>
            <span>{product.in_stock?"Stocked" : "Unavailable"}</span>
            </p>
            </div>
            )
        })}
    </section>
  )
}

export default ProductList;