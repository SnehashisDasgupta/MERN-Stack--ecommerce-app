import { Link } from "react-router-dom"
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard 
        productId="fafafgfg" 
        name="Apple MacBook Air Laptop M1" 
        price={83990} 
        stock={43} 
        handler={addToCartHandler} 
        photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
        />
      </main>
    </div>
  )
}

export default Home