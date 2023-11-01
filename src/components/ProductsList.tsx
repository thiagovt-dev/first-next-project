import { ProductType, fetchProducts } from "@/services/products";
import ProductCard from "./ProductCard";


const ProductsList = async () => {
     const products: ProductType[] = await fetchProducts();
     console.log(products);

   return (
     <>
       <div className=" row g-5">
         {products.map((product) => (
           <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
             <ProductCard product={product} />
           </div>
         ))}
       </div>
     </>
   );
};

export default ProductsList;
