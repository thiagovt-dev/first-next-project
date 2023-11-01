import { ProductType, fetchProducts } from "@/services/products";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const ProductsList = async () => {
      const posts = await loadPosts();
      console.log(posts);
      return (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-listing">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </div>
          ))}
        </div>
      );
//     const products: ProductType[] = await fetchProducts();
//     console.log(products);

//   return (
//     <>
//       <div className=" row g-5">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
};

export default ProductsList;
