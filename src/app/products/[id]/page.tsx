// import ProductDetails from "@/components/ProductComponents/ProductDetails";
// import { fetchProduct, fetchProducts } from "@/services/products";
// import { Metadata } from "next";
// import { redirect } from "next/navigation";

// type ParamsProps = {
//   params: { id: string };
// };

// export const generateMetadata = async ({
//   params,
// }: ParamsProps): Promise<Metadata> => {
//   const product = await fetchProduct(params.id);

//   return {
//     title: `${product.name}`,
//     description: `${product.description}`,
//     icons: {
//       icon: "/favicon.ico",
//     },
//   };
// };
// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const products = await fetchProducts();

//   return products.map((product) => ({ id: product.id.toString() }));
// }

// const Product = async ({ params: { id } }: ParamsProps) => {
//   const product = await fetchProduct(id);

//   if (!product) redirect("/products");

//   return (
//     <div className="container mt-5">
//       <ProductDetails product={product} />
//     </div>
//   );
// };
// export default Product;
