import ProductDetails from "@/components/ProductDetails";
import { ProductType, fetchProduct, fetchProducts } from "@/services/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

// type MetaProps = {
//   params: ProductType;
// };
// export const generateMetadata = ({ params }: MetaProps): Metadata => {
//   return {
//     title: `${params.name}`,
//     description: `${params.description}`,
//     icons: {
//       icon: "/products/favicon.ico",
//     },
//   };
// };

export async function getProduct(context?: { params: { id: string } }) {
  const id = context?.params?.id;
  console.log("product:" + id);
  if (typeof id === "string") {
    const product = fetchProduct(id);
    console.log("product:" + id)
    return product;
  }

  return redirect("/products");
}

// async function getPost(context:{params}) {
//   const res = await fetchProduct(context.params.id);
//   console.log(context.params.id)
//   return res;
// }

export const dynamicParams = false; // substitui o fallback do getStaticPaths
export async function generateStaticParams() {
  const products = await fetchProducts();

  const paths = products.map((product) => {
    console.log("fui chamado: " + product.id)
    return [{ id: product.id.toString() }];
  });
  return paths;
}



const Products = async (params: {
  product?: ProductType;
}) => {
  const prod = getProduct()
  // console.log(prod);

  return (
    <div className="container mt-5">
      {/* <h1>test: {params.product}</h1> */}
      {/* <ProductDetails product={product} /> */}
    </div>
  );
};
export default Products;
