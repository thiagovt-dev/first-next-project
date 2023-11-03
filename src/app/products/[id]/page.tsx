import ProductDetails from "@/components/ProductDetails";
import { ProductType, fetchProduct, fetchProducts } from "@/services/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type MetaProps = {
  params: ProductType;
};
export const generateMetadata = ({ params }: MetaProps): Metadata => {
  return {
    title: `${params.name}`,
    description: `${params.description}`,
    icons: {
      icon: "/products/favicon.ico",
    },
  };
};

export async function getProduct(params: { id: string }) {
  const id = params?.id;
  if (typeof id === "string") {
    const product = fetchProduct(id);
    return {
      params: {
        product,
      },
    };
  }

  return redirect("/products");
}

export const dynamicParams = false; // substitui o fallback do getStaticPaths

export async function generateStaticParams() {
  const products = await fetchProducts();
  const paths = products.map((product) => {
    return [{ id: product.id.toString() }];
  });
  return paths;
}

const Products = async ({ params }: { params: ProductType }) => {
  return (
    <div className="container mt-5">
      <h1>test: {params.id}</h1>
      {/* <ProductDetails product={product} /> */}
    </div>
  );
};
export default Products;
