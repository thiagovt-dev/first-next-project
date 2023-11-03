import ProductsList from "@/components/ProductsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products main page",
 
};


export default async function Products() {

  return (
    <main>
      <div className=" container mb-5">
        <h1 className="my-5">Our Products</h1>
        <ProductsList />
      </div>
    </main>
  );
}
