import { ProductsContext } from "../../contexts/product.context";
import { useContext } from "react";
import ProductCard from "../../components/products/ProductsCard.component";

const Shop = () => {

    const { products } = useContext(ProductsContext);
    return ( 
        <div>
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
        </div>
     )
}
 
export default Shop;
